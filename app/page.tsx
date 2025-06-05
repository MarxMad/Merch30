"use client";

import { useEffect, useState } from 'react';
import { HomeSection } from '@/components/sections/home-section';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Cargando...</div>; // Placeholder mientras se carga en el cliente
  }

  return (
    <div className="space-y-8">
      <HomeSection />
    </div>
  );
}