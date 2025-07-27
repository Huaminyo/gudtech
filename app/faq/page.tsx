import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "What is Gud Tech?",
    answer:
      "Gud Tech is an AI-powered crypto terminal that provides real-time market intelligence and insights to help you navigate the crypto market efficiently.",
  },
  {
    question: "How does the staking work?",
    answer:
      "You can stake $ZRC tokens to earn $GUD rewards. The more you stake and the longer your streak, the higher your multiplier and rewards.",
  },
  {
    question: "What is the $GUD token?",
    answer:
      "$GUD is the native utility token of the Gud Tech ecosystem, earned through staking and used for premium features.",
  },
  {
    question: "Is my wallet safe?",
    answer:
      "Yes, we use industry-standard security practices. We never store your private keys and all transactions are executed through secure smart contracts.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400">Everything you need to know about Gud Tech</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
