"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Smartphone, Wallet, FileText, Scan, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <Scan className="h-6 w-6" />,
    title: "Scan QR Code",
    description: "Each merchandise item has a unique QR code linking to your NFT claim page",
    image: "https://images.pexels.com/photos/9483891/pexels-photo-9483891.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Connect Wallet",
    description: "Connect your Web3 wallet to verify your identity and prepare for minting",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Optional Profile",
    description: "Provide anonymous profile data like your role and experience (completely optional)",
    image: "https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Receive NFT",
    description: "Your NFT is minted directly to your wallet as proof of ownership",
    image: "https://images.pexels.com/photos/8369615/pexels-photo-8369615.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Unlock Benefits",
    description: "Use your NFT to access exclusive content, communities, and future airdrops",
    image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section id="how-it-works\" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-chart-4/5 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Our seamless claim process makes it easy to connect physical merchandise to digital assets
          </p>
        </div>
        
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Steps navigation */}
          <div className="flex flex-col space-y-4">
            {steps.map((step, index) => (
              <button
                key={index}
                className={cn(
                  "group flex items-start rounded-lg border p-6 text-left transition-all duration-300",
                  activeStep === index 
                    ? "border-primary/50 bg-muted/20" 
                    : "border-muted/30 bg-card/30 hover:border-primary/30 hover:bg-muted/10"
                )}
                onClick={() => setActiveStep(index)}
              >
                <div className={cn(
                  "mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  activeStep === index 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted/50 text-muted-foreground group-hover:bg-primary/80 group-hover:text-primary-foreground"
                )}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Visual representation */}
          <div className="relative mx-auto aspect-square max-w-lg lg:mt-0">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-muted/30 bg-muted/10 shadow-xl">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeStep === index ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h4 className="mb-2 text-xl font-semibold">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Step indicators */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    activeStep === index 
                      ? "w-8 bg-primary" 
                      : "bg-muted hover:bg-muted-foreground"
                  )}
                  onClick={() => setActiveStep(index)}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}