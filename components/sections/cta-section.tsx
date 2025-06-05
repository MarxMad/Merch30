"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };
  
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-chart-2/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-chart-1/10 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-muted/30 bg-card/30 p-8 shadow-xl backdrop-blur-sm md:p-12">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your event merchandise?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join our early access program and be among the first to integrate Proof of Merch into your Web3 events.
            </p>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="group">
                <span>Get Early Access</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>
          ) : (
            <div className="mx-auto max-w-md rounded-lg bg-primary/10 p-4 text-center">
              <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-medium text-primary">
                Thank you! We'll be in touch about early access.
              </p>
            </div>
          )}
          
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-sm text-muted-foreground">Events Supported</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">50K+</h3>
              <p className="text-sm text-muted-foreground">NFTs Claimed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-sm text-muted-foreground">Blockchain Networks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}