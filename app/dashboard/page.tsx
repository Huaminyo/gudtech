"use client"

import { CryptoPriceTicker } from "@/components/crypto-price-ticker"
import { TrendingCrypto } from "@/components/trending-crypto"
import { GlobalCryptoStats } from "@/components/global-crypto-stats"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, BarChart3 } from "lucide-react"

export default function DashboardPage() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-white mb-2">Crypto Market Dashboard</h1>
            <p className="text-gray-400">Real-time cryptocurrency market data powered by CoinGecko</p>
          </div>
          <Button
            onClick={handleRefresh}
            variant="outline"
            className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Price Ticker */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-500" />
            Top Cryptocurrencies
          </h2>
          <CryptoPriceTicker />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GlobalCryptoStats />
          <TrendingCrypto />
        </div>

        {/* Market Insights */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Market Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 mb-2">🚀</div>
                <h3 className="text-white font-semibold mb-1">AI-Powered Analysis</h3>
                <p className="text-gray-400 text-sm">Get real-time market insights with our AI chat assistant</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">📊</div>
                <h3 className="text-white font-semibold mb-1">Live Data</h3>
                <p className="text-gray-400 text-sm">Real-time prices and market data from CoinGecko API</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500 mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-1">Fast Updates</h3>
                <p className="text-gray-400 text-sm">Market data updates every 30 seconds automatically</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
