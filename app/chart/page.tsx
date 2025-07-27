"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, BarChart3 } from "lucide-react"

export default function ChartPage() {
  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-light text-foreground mb-2">MAO Token Live Chart</h1>
            <p className="text-muted-foreground text-sm lg:text-base">
              Real-time trading data for MAO/WETH on Base network
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => window.open("https://ape.store/base/0x150cb4f0950cb7f0b2af89d5bfca9e3ef8969357", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Buy $MAO
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://dexscreener.com/base/0x157dc06876D2aF7a794F3e544DB47d5f5eF0782E", "_blank")
              }
              className="bg-card border-border text-foreground hover:bg-accent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on DexScreener
            </Button>
          </div>
        </div>

        {/* Token Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 lg:mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Token</p>
                  <p className="text-lg font-semibold text-foreground">MAO</p>
                </div>
                <Badge variant="secondary" className="bg-blue-600/10 text-blue-400 border-blue-600/20">
                  Base Network
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Trading Pair</p>
                  <p className="text-lg font-semibold text-foreground">MAO/WETH</p>
                </div>
                <BarChart3 className="w-6 h-6 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">DEX</p>
                  <p className="text-lg font-semibold text-foreground">Uniswap V3</p>
                </div>
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              MAO / WETH Live Chart
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full" style={{ height: "620px" }}>
              <iframe
                src="https://dexscreener.com/base/0x157dc06876D2aF7a794F3e544DB47d5f5eF0782E"
                className="w-full h-full rounded-b-lg"
                allowFullScreen
                title="MAO Token Live Chart"
              />
            </div>
          </CardContent>
        </Card>

        {/* Trading Info */}
        <div className="mt-6 lg:mt-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Trading Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-foreground font-semibold mb-3">Contract Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Token Address:</span>
                      <span className="text-foreground font-mono text-xs">0x150cb...969357</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pair Address:</span>
                      <span className="text-foreground font-mono text-xs">0x157dc...F0782E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Network:</span>
                      <span className="text-foreground">Base</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-3">How to Buy</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>1. Connect your Web3 wallet to Base network</p>
                    <p>2. Get WETH or ETH for trading</p>
                    <p>3. Use Ape.Store or Uniswap to swap for MAO</p>
                    <p>4. Add MAO to your portfolio tracker</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
