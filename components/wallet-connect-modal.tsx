"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useConnect, useAccount, useDisconnect } from "wagmi"
import { Wallet, ExternalLink, Copy, Check, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface WalletConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

const walletIcons: { [key: string]: string } = {
  metaMask: "MM",
  okx: "OKX",
  bitget: "BG",
  trust: "TW",
  walletConnect: "WC",
  coinbaseWallet: "CB",
  injected: "W",
}

export function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  const { connectors, connect, status, error } = useConnect()
  const { address, isConnected, connector } = useAccount()
  const { disconnect } = useDisconnect()
  const [copied, setCopied] = useState(false)

  const handleConnect = (connector: any) => {
    connect({ connector })
  }

  const handleDisconnect = () => {
    disconnect()
    onClose()
  }

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const getChainName = (chainId?: number) => {
    const chains: { [key: number]: string } = {
      1: "Ethereum",
      137: "Polygon",
      42161: "Arbitrum",
      10: "Optimism",
      8453: "Base",
      56: "BSC",
    }
    return chains[chainId || 1] || "Unknown"
  }

  if (isConnected && address) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-green-500" />
              Wallet Connected
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Wallet Info */}
            <div className="bg-gray-700 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Wallet</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{walletIcons[connector?.id || "injected"]}</span>
                  </div>
                  <span className="font-medium">{connector?.name || "Unknown"}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Network</span>
                <Badge variant="outline" className="bg-green-600/20 border-green-600/30 text-green-400">
                  {getChainName()}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Address</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm">{formatAddress(address)}</span>
                  <Button variant="ghost" size="sm" onClick={copyAddress} className="h-6 w-6 p-0 hover:bg-gray-600">
                    {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => window.open(`https://etherscan.io/address/${address}`, "_blank")}
                className="flex-1 bg-transparent border-gray-600 hover:bg-gray-700"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Explorer
              </Button>
              <Button
                variant="outline"
                onClick={handleDisconnect}
                className="flex-1 bg-red-600/10 border-red-600/30 text-red-400 hover:bg-red-600/20"
              >
                Disconnect
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-blue-500" />
            Connect Wallet
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            Connect your wallet to access Web3Mao features and manage your crypto portfolio.
          </p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-red-400 text-sm">{error.message}</span>
            </div>
          )}

          {/* Wallet Options */}
          <div className="space-y-2">
            {connectors.map((connector) => (
              <Button
                key={connector.id}
                onClick={() => handleConnect(connector)}
                disabled={status === "pending"}
                className="w-full justify-start bg-gray-700 hover:bg-gray-600 border-gray-600 text-white h-12"
                variant="outline"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{walletIcons[connector.id] || "W"}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{connector.name}</p>
                    {connector.id === "walletConnect" && (
                      <p className="text-xs text-gray-400">Scan with mobile wallet</p>
                    )}
                    {connector.id === "metaMask" && <p className="text-xs text-gray-400">Browser extension</p>}
                    {connector.id === "okx" && <p className="text-xs text-gray-400">OKX Wallet extension</p>}
                    {connector.id === "bitget" && <p className="text-xs text-gray-400">Bitget Wallet extension</p>}
                  </div>
                </div>
                {status === "pending" && (
                  <div className="ml-auto">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </Button>
            ))}
          </div>

          {/* Info */}
          <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-3">
            <p className="text-blue-400 text-xs">
              By connecting a wallet, you agree to Web3Mao's Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
