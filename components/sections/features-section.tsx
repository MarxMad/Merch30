"use client";

import { useState } from "react";
import { QrCode, Shield, BarChart, Key, Zap, Share2, Gauge, Repeat } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <QrCode className="h-6 w-6" />,
    title: "QR-Based Claiming",
    description: "Unique QR codes on physical merch for fast and simple NFT claiming process"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Proof of Ownership",
    description: "NFTs serve as verifiable digital certificates for physical merchandise"
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analytics & Insights",
    description: "Track engagement and collect anonymous user data with opt-in forms"
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: "Access Keys",
    description: "Unlock exclusive experiences, communities, and rewards with your NFT"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lazy Minting",
    description: "Efficient on-demand minting to reduce gas costs and complexity"
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Multichain Ready",
    description: "Deployable across multiple EVM-compatible chains like Arbitrum, Mantle, and more"
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Performance Optimized",
    description: "Designed for high-volume events with thousands of simultaneous claims"
  },
  {
    icon: <Repeat className="h-6 w-6" />,
    title: "Interoperability",
    description: "Compatible with POAP, Guild.xyz, Lens, and other web3 identity systems"
  }
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section id="features\" className="relative bg-muted/10 py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-chart-3/5 blur-[100px]" />
        <div className="absolute left-1/4 top-2/3 -z-10 h-[300px] w-[300px] rounded-full bg-chart-1/5 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Revoluciona tu Merchandising
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestra plataforma transforma la mercancía física en herramientas de marketing 
            potentes con engagement rastreable y valiosos insights de usuarios.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "group relative rounded-xl border p-6 transition-all duration-300 hover:border-primary/50 hover:bg-muted/20",
                activeFeature === index ? "border-primary/50 bg-muted/20" : "border-muted/30 bg-card/30"
              )}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className={cn(
                "mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300",
                activeFeature === index ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground group-hover:bg-primary/80 group-hover:text-primary-foreground"
              )}>
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}