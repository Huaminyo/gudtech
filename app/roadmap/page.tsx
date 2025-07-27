import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const roadmapItems = [
  {
    id: "01",
    title: "AI-Powered Crypto Terminal",
    description:
      "Crypto moves fast, don't waste time doomscrolling for insights. Gud Tech cuts through the noise, delivering real-time market intelligence.",
    icon: "📊",
    status: "completed",
  },
  {
    id: "02",
    title: "Gud, But Could Be Better",
    description:
      "Additional AI capabilities and features such as smart wallets, comparison queries, advanced charts, larger and more diverse datasets.",
    icon: "🔥",
    status: "in-progress",
  },
  {
    id: "03",
    title: "Your Wish is My Command",
    description:
      "Integrating with Zircuit liquidity hub and other DeFi platforms. Trade tokens and execute DeFi strategies like yield farming and staking with single command on Gud Tech terminal.",
    icon: "✨",
    status: "planned",
  },
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <div className="w-6 h-6 bg-green-500 rounded-full absolute translate-x-6 -translate-y-2 flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-light text-white mb-4">Gud Tech is getting better, one query at a time.</h1>
        </div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {roadmapItems.map((item) => (
            <Card key={item.id} className="bg-gray-800 border-gray-700 relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{item.icon}</div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    / {item.id}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">Get GUD Now or Never</Button>
        </div>
      </div>
    </div>
  )
}
