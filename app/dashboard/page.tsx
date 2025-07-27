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
    <div className="min-h-screen bg-gray-900 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-light text-white mb-2">Crypto Market Dashboard</h1>
            <p className="text-gray-400 text-sm lg:text-base">
              Real-time cryptocurrency market data powered by CoinGecko
            </p>
          </div>
          <Button
            onClick={handleRefresh}
            variant="outline"
            className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 w-full lg:w-auto"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Price Ticker */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-500" />
            Top Cryptocurrencies
          </h2>
          <CryptoPriceTicker />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <GlobalCryptoStats />
          <TrendingCrypto />
        </div>

        {/* Market Insights */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-lg lg:text-xl">Market Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 mb-2">🚀</div>
                <h3 className="text-white font-semibold mb-1 text-sm lg:text-base">AI-Powered Analysis</h3>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Get real-time market insights with our AI chat assistant
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">📊</div>
                <h3 className="text-white font-semibold mb-1 text-sm lg:text-base">Live Data</h3>
                <p className="text-gray-400 text-xs lg:text-sm">Real-time prices and market data from CoinGecko API</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500 mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-1 text-sm lg:text-base">Fast Updates</h3>
                <p className="text-gray-400 text-xs lg:text-sm">Market data updates every 30 seconds automatically</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
