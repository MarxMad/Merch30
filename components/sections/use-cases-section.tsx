"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Users, Building, Coins } from "lucide-react";

const useCases = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Hackathons",
    description: "Validate participation with NFTs tied to specific activities. Track developer engagement and provide exclusive access to post-event resources based on participation level.",
    points: [
      "Tie merch to specific hackathon achievements",
      "Enable post-event community building",
      "Provide proof of participation for portfolios",
      "Offer targeted follow-up resources"
    ]
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Conferences",
    description: "Segment audiences by NFT type and send personalized content after the event. Use merchandise as a way to identify different attendee types and tailor follow-up communications.",
    points: [
      "Track attendance across multiple events",
      "Segment audiences for targeted airdrops",
      "Enable special access to digital content",
      "Create loyalty programs for repeat attendees"
    ]
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "DAO Onboarding",
    description: "Distribute merch and associate roles from the beginning. Use NFTs as membership credentials that unlock governance rights or special access to DAO resources.",
    points: [
      "Streamline member verification process",
      "Associate governance rights with NFT possession",
      "Enable role-based access to resources",
      "Create visual identity for DAO members"
    ]
  },
  {
    icon: <Coins className="h-10 w-10" />,
    title: "Token Communities",
    description: "Verify token holders with physical merchandise tied to NFTs. Create exclusive merchandise for different tiers of token holders and use the NFTs for additional utility.",
    points: [
      "Offer exclusive merchandise to loyal holders",
      "Create physical manifestations of digital assets",
      "Enhance community belonging and identity",
      "Drive additional utility for token holders"
    ]
  }
];

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(0);
  
  return (
    <section id="use-cases\" className="relative bg-muted/10 py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-chart-5/5 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-chart-2/5 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Use Cases
          </h2>
          <p className="text-muted-foreground">
            Discover how Proof of Merch can transform engagement across different Web3 events
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="mx-auto mb-8 flex max-w-3xl flex-wrap justify-center gap-4">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center rounded-full border px-5 py-2 text-sm transition-all duration-300",
                activeCase === index 
                  ? "border-primary bg-primary/10 text-primary" 
                  : "border-muted/30 bg-card/30 text-muted-foreground hover:border-primary/30 hover:bg-muted/20"
              )}
              onClick={() => setActiveCase(index)}
            >
              <span className="mr-2">{useCase.icon}</span>
              <span>{useCase.title}</span>
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-muted/30 bg-card/30 shadow-lg">
          <div className="relative">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-500",
                  activeCase === index 
                    ? "relative opacity-100" 
                    : "absolute inset-0 opacity-0"
                )}
              >
                <div className="grid gap-8 p-8 md:grid-cols-2">
                  <div>
                    <div className="mb-4 inline-flex rounded-lg bg-muted/30 p-3">
                      {useCase.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{useCase.title}</h3>
                    <p className="mb-6 text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <ul className="space-y-4">
                      {useCase.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 text-center text-xs font-medium leading-5 text-primary">
                            {i + 1}
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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