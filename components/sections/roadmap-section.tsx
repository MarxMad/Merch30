"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const roadmapItems = [
  {
    title: "MVP Development",
    timeline: "Q1 2024",
    description: "Launch of core functionality with basic NFT claiming and dashboard",
    features: [
      { text: "ERC-721 contract deployment", completed: true },
      { text: "QR code generation system", completed: true },
      { text: "Basic claiming interface", completed: true },
      { text: "Minimal backend for data storage", completed: true }
    ]
  },
  {
    title: "Multichain Support",
    timeline: "Q2 2024",
    description: "Expand platform capabilities to multiple EVM-compatible chains",
    features: [
      { text: "Support for Arbitrum, Mantle, Base", completed: false },
      { text: "Chain-agnostic frontend interface", completed: false },
      { text: "Cross-chain analytics dashboard", completed: false },
      { text: "Gas optimization for all chains", completed: false }
    ]
  },
  {
    title: "Admin Dashboard",
    timeline: "Q3 2024",
    description: "Comprehensive analytics and campaign management tools for organizers",
    features: [
      { text: "Real-time claiming statistics", completed: false },
      { text: "User segment analysis tools", completed: false },
      { text: "Campaign performance metrics", completed: false },
      { text: "Export functionality for data integration", completed: false }
    ]
  },
  {
    title: "Dynamic Perks Engine",
    timeline: "Q4 2024",
    description: "Automated system for delivering benefits based on NFT ownership",
    features: [
      { text: "Rule-based perk distribution", completed: false },
      { text: "Time-based and action-based triggers", completed: false },
      { text: "Integration with popular reward systems", completed: false },
      { text: "Customizable notification system", completed: false }
    ]
  },
  {
    title: "Community Platform Integrations",
    timeline: "Q1 2025",
    description: "Seamless connectivity with leading Web3 community platforms",
    features: [
      { text: "Lens Protocol integration", completed: false },
      { text: "Farcaster integration", completed: false },
      { text: "Guild.xyz role-based access", completed: false },
      { text: "Discord/Telegram bot connectivity", completed: false }
    ]
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative bg-muted/10 py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-chart-5/5 blur-[80px]" />
        <div className="absolute right-0 bottom-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-chart-3/5 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Development Roadmap
          </h2>
          <p className="text-muted-foreground">
            Our strategic plan for evolving the Proof of Merch platform
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-muted/30 md:left-1/2 md:-ml-0.5" />
          
          {/* Roadmap items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2">
                  <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                </div>
                
                <div className={cn(
                  "flex flex-col md:flex-row",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Empty space for alignment */}
                  <div className="md:w-1/2" />
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="rounded-lg border border-muted/30 bg-card/30 p-6">
                      <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {item.timeline}
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <div className={cn(
                              "mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                              feature.completed 
                                ? "bg-primary/20 text-primary" 
                                : "bg-muted/30 text-muted-foreground"
                            )}>
                              {feature.completed && <Check className="h-3 w-3" />}
                            </div>
                            <span className={cn(
                              feature.completed ? "" : "text-muted-foreground"
                            )}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}