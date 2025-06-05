"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hexagon, ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-1/10 blur-[100px]" />
        <div className="absolute right-0 top-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-chart-2/10 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Tokeniza tu{' '}
                <span className="text-primary">merchandising</span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Convierte la mercancía de tus eventos en NFTs para engagement Web3
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Comenzar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Hexagon className="h-5 w-5 text-primary" />
                <span>NFTs verificables</span>
              </div>
              <div className="flex items-center gap-2">
                <Hexagon className="h-5 w-5 text-primary" />
                <span>Multi-cadena</span>
              </div>
              <div className="flex items-center gap-2">
                <Hexagon className="h-5 w-5 text-primary" />
                <span>Análisis en tiempo real</span>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-lg">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
              <div className="relative h-full w-full rounded-2xl border border-muted/30 bg-background/50 p-8 backdrop-blur-sm">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Hexagon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Proof of Merch</h3>
                    <p className="text-sm text-muted-foreground">
                      Tu mercancía, tokenizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logos section */}
      <div className="container mx-auto border-t border-muted/30 px-4 py-12">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          TRUSTED BY LEADING WEB3 PROJECTS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70">
          {["Arbitrum", "Mantle", "Polygon", "Optimism", "Base"].map((logo, index) => (
            <div key={index} className="flex items-center justify-center px-4 py-2">
              <p className="text-lg font-semibold">{logo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}