"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle, BarChart3, Coins, Map, HelpCircle, PieChart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Chat", href: "/", icon: MessageCircle },
  { name: "Chat History", href: "/chat-history", icon: MessageCircle },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Portfolio", href: "/portfolio", icon: PieChart },
  { name: "$GUD", href: "/stake", icon: Coins },
  { name: "Roadmap", href: "/roadmap", icon: Map },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
]

interface SidebarProps {
  onClose?: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="h-full w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-black">G</span>
          </div>
          <span className="font-semibold text-lg">gud.tech</span>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden text-white">
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* Buy $GUD Button */}
      <div className="p-4">
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Buy $GUD</Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-green-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
