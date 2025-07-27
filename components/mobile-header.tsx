"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface MobileHeaderProps {
  onMenuClick: () => void
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onMenuClick} className="text-white">
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-black">G</span>
          </div>
          <span className="font-semibold">gud.tech</span>
        </div>
      </div>
      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs px-3">
        Connect
      </Button>
    </div>
  )
}
