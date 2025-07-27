import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const roadmapItems = [
  {
    id: "01",
    title: "AI-Powered Crypto Terminal",
    description:
      "Crypto moves fast, don't waste time doomscrolling for insights. Web3Mao cuts through the noise, delivering real-time market intelligence with advanced AI capabilities.",
    icon: "📊",
    status: "completed",
  },
  {
    id: "02",
    title: "Mao, But Could Be Better",
    description:
      "Additional AI capabilities and features such as smart wallets, comparison queries, advanced charts, larger and more diverse datasets for comprehensive market analysis.",
    icon: "🔥",
    status: "in-progress",
  },
  {
    id: "03",
    title: "Your Wish is My Command",
    description:
      "Integrating with DeFi platforms and liquidity hubs. Trade tokens and execute DeFi strategies like yield farming and staking with single command on Web3Mao terminal.",
    icon: "✨",
    status: "planned",
  },
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative">
              <img src="/images/web3mao-mascot.png" alt="Web3Mao" className="w-16 h-16 rounded-full" />
              <div className="w-6 h-6 bg-green-500 rounded-full absolute -bottom-1 -right-1 flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-light text-foreground mb-4">Web3Mao is getting better, one query at a time.</h1>
        </div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {roadmapItems.map((item) => (
            <Card key={item.id} className="bg-card border-border relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{item.icon}</div>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    / {item.id}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Get $MAO Now or Never</Button>
        </div>
      </div>
    </div>
  )
}
