"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAccount, useBalance, useEnsName } from "wagmi"
import { WalletConnectModal } from "@/components/wallet-connect-modal"
import { Wallet } from "lucide-react"

export function WalletButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { data: balance } = useBalance({ address })

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const formatBalance = (balance: any) => {
    if (!balance) return "0.00"
    const value = Number.parseFloat(balance.formatted)
    if (value < 0.001) return "< 0.001"
    return value.toFixed(3)
  }

  if (isConnected && address) {
    return (
      <>
        <Button onClick={() => setIsModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white">
          <Wallet className="w-4 h-4 mr-2" />
          <div className="flex flex-col items-start">
            <span className="text-xs">{ensName || formatAddress(address)}</span>
            <span className="text-xs opacity-80">{formatBalance(balance)} ETH</span>
          </div>
        </Button>
        <WalletConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    )
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
      </Button>
      <WalletConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
