"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Cpu, Database, Globe, Layers } from "lucide-react";

const architectureLayers = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Smart Contracts",
    description: "EVM-compatible contracts deployed on popular L1/L2 networks",
    details: [
      "ERC-721 standard with extended metadata",
      "Lazy minting capability to reduce gas costs",
      "Multichain deployment support",
      "Built-in tracking for claim statistics"
    ],
    color: "from-chart-1/20 to-chart-1/10"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Frontend DApp",
    description: "Modern React application with Web3 connectivity",
    details: [
      "React + ethers.js integration",
      "QR code scanning functionality",
      "Wallet connection with multiple providers",
      "Mobile-responsive claim interface"
    ],
    color: "from-chart-2/20 to-chart-2/10"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Backend Systems",
    description: "Secure data storage with privacy-preserving architecture",
    details: [
      "Storage of opt-in user data",
      "Association of metadata with NFT IDs",
      "Analytics processing pipeline",
      "Integration with event management systems"
    ],
    color: "from-chart-3/20 to-chart-3/10"
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Integration Layer",
    description: "APIs and connectors for external system compatibility",
    details: [
      "Compatible with POAP and Guild.xyz",
      "Support for Lens Protocol integration",
      "Hooks for Discord/Telegram access control",
      "Dashboard API for event organizers"
    ],
    color: "from-chart-4/20 to-chart-4/10"
  }
];

export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(0);
  
  return (
    <section id="architecture\" className="relative py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-chart-1/5 blur-[80px]" />
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-chart-4/5 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Architecture
          </h2>
          <p className="text-muted-foreground">
            Built with a focus on security, scalability, and interoperability
          </p>
        </div>
        
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          {/* Layer navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {architectureLayers.map((layer, index) => (
                <button
                  key={index}
                  className={cn(
                    "group flex w-full items-start rounded-lg border p-4 text-left transition-all duration-300",
                    activeLayer === index 
                      ? "border-primary/50 bg-muted/20" 
                      : "border-muted/30 bg-card/30 hover:border-primary/30 hover:bg-muted/10"
                  )}
                  onClick={() => setActiveLayer(index)}
                >
                  <div className={cn(
                    "mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                    activeLayer === index 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted/50 text-muted-foreground group-hover:bg-primary/80 group-hover:text-primary-foreground"
                  )}>
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Layer details */}
          <div className="lg:col-span-2">
            <div className="relative min-h-[400px] overflow-hidden rounded-xl border border-muted/30">
              {architectureLayers.map((layer, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeLayer === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                >
                  <div className={cn(
                    "h-32 bg-gradient-to-r p-8",
                    layer.color
                  )}>
                    <div className="flex items-center">
                      <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-primary">
                        {layer.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{layer.title}</h3>
                        <p className="text-muted-foreground">{layer.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="mb-4 text-lg font-medium">Key Components</h4>
                    <ul className="space-y-4">
                      {layer.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-3 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                            {i + 1}
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 rounded-lg bg-muted/10 p-4">
                      <h4 className="mb-2 text-sm font-medium">Technical Note</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Our smart contracts have been optimized for gas efficiency and are currently deployed on multiple EVM chains including Arbitrum and Mantle."}
                        {index === 1 && "The frontend application is built with React and supports all major Ethereum wallets including MetaMask, WalletConnect, and Coinbase Wallet."}
                        {index === 2 && "All user data is collected on an opt-in basis and stored in a privacy-preserving manner, with no personally identifiable information."}
                        {index === 3 && "Our integration layer features a well-documented API that allows for seamless connection with other Web3 systems and identity platforms."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}