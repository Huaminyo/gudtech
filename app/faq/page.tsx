import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "What is Web3Mao?",
    answer:
      "Web3Mao is an AI-powered crypto terminal that provides real-time market intelligence and insights to help you navigate the crypto market efficiently with advanced AI capabilities.",
  },
  {
    question: "How does the staking work?",
    answer:
      "You can stake $MAO tokens to earn rewards. The more you stake and the longer your streak, the higher your multiplier and rewards in the Web3Mao ecosystem.",
  },
  {
    question: "What is the $MAO token?",
    answer:
      "$MAO is the native utility token of the Web3Mao ecosystem, earned through staking and used for premium features, governance, and accessing advanced AI capabilities.",
  },
  {
    question: "Is my wallet safe?",
    answer:
      "Yes, Web3Mao uses industry-standard security practices. We never store your private keys and all transactions are executed through secure smart contracts audited by leading security firms.",
  },
  {
    question: "How does Web3Mao AI work?",
    answer:
      "Web3Mao AI analyzes real-time market data from multiple sources, processes social sentiment, and uses advanced algorithms to provide actionable crypto insights and portfolio recommendations.",
  },
  {
    question: "Can I use Web3Mao on mobile?",
    answer:
      "Yes! Web3Mao is fully responsive and optimized for mobile devices. You can access all features including AI chat, portfolio tracking, and market analysis on your smartphone or tablet.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Everything you need to know about Web3Mao</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
