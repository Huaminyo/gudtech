"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock } from "lucide-react"

interface ChatSession {
  id: string
  title: string
  timestamp: Date
  messageCount: number
  lastMessage: string
}

export default function ChatHistoryPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([])

  useEffect(() => {
    // In a real app, this would fetch from a database
    const mockSessions: ChatSession[] = [
      {
        id: "1",
        title: "Bitcoin Price Analysis",
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        messageCount: 8,
        lastMessage: "Based on current market trends, Bitcoin is showing bullish signals...",
      },
      {
        id: "2",
        title: "DeFi Yield Farming Strategies",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        messageCount: 12,
        lastMessage: "The best yield farming opportunities right now are...",
      },
      {
        id: "3",
        title: "Altcoin Market Overview",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        messageCount: 6,
        lastMessage: "Several altcoins are showing strong momentum including...",
      },
    ]
    setSessions(mockSessions)
  }, [])

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} hours ago`
    } else {
      return `${Math.floor(diffInMinutes / 1440)} days ago`
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-white mb-2">Chat History</h1>
            <p className="text-gray-400">Your previous conversations with Gud Tech AI</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        {sessions.length === 0 ? (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-12 text-center">
              <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">No chat history yet</h3>
              <p className="text-gray-400 mb-6">Start a conversation to see your chat history here</p>
              <Button className="bg-green-600 hover:bg-green-700">Start Chatting</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {sessions.map((session) => (
              <Card
                key={session.id}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">{session.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      {formatTimeAgo(session.timestamp)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{session.lastMessage}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {session.messageCount} messages
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                    >
                      Continue Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
