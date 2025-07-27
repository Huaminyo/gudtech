import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MobileLayout } from "@/components/mobile-layout"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web3Mao - AI-Powered Crypto Terminal",
  description: "AI-powered crypto terminal for real-time market intelligence with Web3Mao",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="flex-1">
            <MobileLayout>{children}</MobileLayout>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
