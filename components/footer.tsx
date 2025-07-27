"use client"

import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/web3mao-mascot.png" alt="Web3Mao" className="w-6 h-6 rounded-full" />
            <span className="text-foreground font-medium">Web3Mao</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>AI-Powered Crypto Terminal</span>
            <Separator orientation="vertical" className="h-4" />
            <span>© {currentYear} Web3Mao. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
