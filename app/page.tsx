"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Lock, User, Bot, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const trendingTopics = [
  "bitcoin price",
  "ethereum analysis",
  "trending coins",
  "market cap",
  "defi trends",
  "altcoin season",
  "btc dominance",
  "market sentiment",
  "price prediction",
  "trading signals",
]

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface QuickStats {
  btc_price: number
  eth_price: number
  market_cap_change: number
}

export default function ChatPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [quickStats, setQuickStats] = useState<QuickStats | null>(null)

  useEffect(() => {
    // Fetch quick stats for the header - reduced frequency
    const fetchQuickStats = async () => {
      try {
        const response = await fetch("/api/crypto/prices?ids=bitcoin,ethereum")
        const result = await response.json()
        if (result.success) {
          setQuickStats({
            btc_price: result.data.bitcoin?.usd || 43000,
            eth_price: result.data.ethereum?.usd || 2600,
            market_cap_change: result.data.bitcoin?.usd_24h_change || 2.5,
          })
        }
      } catch (error) {
        console.error("Failed to fetch quick stats:", error)
        // Set fallback data
        setQuickStats({
          btc_price: 43000,
          eth_price: 2600,
          market_cap_change: 2.5,
        })
      }
    }

    fetchQuickStats()
    const interval = setInterval(fetchQuickStats, 120000) // Update every 2 minutes instead of 1
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          history: messages,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleTopicClick = (topic: string) => {
    setMessage(`Tell me about ${topic}`)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">default</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {quickStats && (
            <div className="flex items-center gap-4 text-sm">
              <Badge variant="outline" className="bg-gray-800 border-gray-600 text-green-400">
                BTC: ${quickStats.btc_price.toLocaleString()}
              </Badge>
              <Badge variant="outline" className="bg-gray-800 border-gray-600 text-blue-400">
                ETH: ${quickStats.eth_price.toLocaleString()}
              </Badge>
              <Badge
                variant="outline"
                className={`bg-gray-800 border-gray-600 ${quickStats.market_cap_change >= 0 ? "text-green-400" : "text-red-400"}`}
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                {quickStats.market_cap_change.toFixed(2)}%
              </Badge>
            </div>
          )}
        </div>
        <Button className="bg-green-600 hover:bg-green-700">Connect Wallet</Button>
      </div>

      {/* Chat Messages or Welcome Screen */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          /* Welcome Screen */
          <div className="flex flex-col items-center justify-center h-full p-8">
            {/* Mascot */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐱</span>
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full absolute translate-x-6 -translate-y-2 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
              </div>
            </div>

            {/* Main Question */}
            <h1 className="text-3xl font-light text-center mb-4 max-w-2xl">
              {"What's happening in the crypto market today?"}
            </h1>
            <p className="text-gray-400 text-center mb-8 max-w-xl">
              Get real-time crypto insights powered by live market data from CoinGecko
            </p>

            {/* Trending Topics */}
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mb-8">
              {trendingTopics.map((topic) => (
                <Button
                  key={topic}
                  variant="outline"
                  size="sm"
                  className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 rounded-full"
                  onClick={() => handleTopicClick(topic)}
                >
                  {topic}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </Button>
              ))}
            </div>
          </div>
        ) : (
          /* Chat Messages */
          <div className="p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-3 max-w-3xl ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {msg.role === "user" ? (
                      <User className="w-6 h-6 text-gray-400" />
                    ) : (
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <Card className={`${msg.role === "user" ? "bg-green-600" : "bg-gray-800"} border-none`}>
                    <CardContent className="p-3">
                      <p className="text-white text-sm whitespace-pre-wrap">{msg.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <Card className="bg-gray-800 border-none">
                  <CardContent className="p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                isLoading
                  ? "AI is analyzing market data..."
                  : "Ask me about crypto trends, prices, or market analysis..."
              }
              className="w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 pr-12 py-6 text-lg rounded-2xl"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 rounded-xl"
              disabled={isLoading || !message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
            <Lock className="absolute right-16 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </form>
      </div>
    </div>
  )
}
