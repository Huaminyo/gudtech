import { http, createConfig } from "wagmi"
import { mainnet, polygon, arbitrum, optimism, base, bsc } from "wagmi/chains"
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors"

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "your-project-id"

export const config = createConfig({
  chains: [mainnet, polygon, arbitrum, optimism, base, bsc],
  connectors: [
    injected({
      target: {
        id: "metaMask",
        name: "MetaMask",
        provider: () => (typeof window !== "undefined" ? window.ethereum : undefined),
      },
    }),
    injected({
      target: {
        id: "okx",
        name: "OKX Wallet",
        provider: () => (typeof window !== "undefined" ? (window as any).okxwallet : undefined),
      },
    }),
    injected({
      target: {
        id: "bitget",
        name: "Bitget Wallet",
        provider: () => (typeof window !== "undefined" ? (window as any).bitkeep?.ethereum : undefined),
      },
    }),
    injected({
      target: {
        id: "trust",
        name: "Trust Wallet",
        provider: () => (typeof window !== "undefined" ? (window as any).trustwallet : undefined),
      },
    }),
    walletConnect({
      projectId,
      metadata: {
        name: "Web3Mao",
        description: "AI-Powered Crypto Terminal",
        url: "https://web3mao.com",
        icons: ["https://web3mao.com/icon.png"],
      },
    }),
    coinbaseWallet({
      appName: "Web3Mao",
      appLogoUrl: "https://web3mao.com/icon.png",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
  },
})

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}
