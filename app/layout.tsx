import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MobileLayout } from "@/components/mobile-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gud.Tech - AI-Powered Crypto Terminal",
  description: "AI-powered crypto terminal for real-time market intelligence",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <MobileLayout>{children}</MobileLayout>
      </body>
    </html>
  )
}
