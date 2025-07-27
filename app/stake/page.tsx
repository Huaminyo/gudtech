"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StakePage() {
  const [stakeAmount, setStakeAmount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Staking Card */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Stake $ZRC, Earn $GUD</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                    Withdraw
                  </Button>
                  <Button variant="outline" className="flex-1 bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                    Stake on Liquidity Hub
                  </Button>
                </div>

                {/* Balance Display */}
                <div className="text-center py-8">
                  <div className="text-6xl font-light text-white mb-2">0</div>
                  <div className="text-gray-400">$0</div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">ZRC</span>
                    </div>
                    <span className="text-gray-400">Balance: 0</span>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Max
                    </Badge>
                  </div>
                </div>

                {/* Connect Wallet Button */}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                  Connect Wallet
                </Button>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-green-500">⚡</span>
                      <span className="text-sm text-gray-400">Streak</span>
                    </div>
                    <div className="text-xl font-semibold text-white">0</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Your Current Multiplier</div>
                    <div className="text-xl font-semibold text-white">1.0x</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Staked Amount</div>
                    <div className="text-xl font-semibold text-white">0</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">GUD Earned</div>
                    <div className="text-xl font-semibold text-white">0</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xl">🐱</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Total Staked:</div>
                    <div className="text-gray-400">ZRC</div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-400 mb-2">The GUD Fairdrop campaign has ended.</div>
                  <div className="text-sm text-gray-300">Keep earning rewards by staking on Liquidity Hub!</div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Get $ZRC 🚀</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
