"use client";

import { ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";

const LOCATIONS = [
  { name: "Mendoza", lat: -32.8908, lng: -68.8272 },
  { name: "Ciudad de México", lat: 19.4326, lng: -99.1332 },
  { name: "Bogotá", lat: 4.711, lng: -74.0721 },
  { name: "Nueva York", lat: 40.7128, lng: -74.006 },
  { name: "Berlín", lat: 52.52, lng: 13.405 },
  { name: "Singapur", lat: 1.3521, lng: 103.8198 },
  { name: "Lisboa", lat: 38.7223, lng: -9.1393 },
  { name: "Tokio", lat: 35.6895, lng: 139.6917 },
  { name: "Londres", lat: 51.5074, lng: -0.1278 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { name: "París", lat: 48.8566, lng: 2.3522 },
  { name: "Estambul", lat: 41.0082, lng: 28.9784 },
  { name: "Sídney", lat: -33.8688, lng: 151.2093 },
  { name: "Dubái", lat: 25.2048, lng: 55.2708 },
  { name: "Johannesburgo", lat: -26.2041, lng: 28.0473 },
];

const EVENTS = [
  { city: "Mendoza", event: "ETH Latam", date: "Mayo 2025", type: "Web3" },
  { city: "Ciudad de México", event: "Web3 Summit", date: "Julio 2025", type: "Web3" },
  { city: "Bogotá", event: "ETH Hack Bogotá", date: "Agosto 2025", type: "Hackathon" },
  { city: "Nueva York", event: "NFT NYC", date: "Septiembre 2025", type: "Web3" },
  { city: "Berlín", event: "ETH Berlin", date: "Octubre 2025", type: "Hackathon" },
  { city: "Singapur", event: "Web3 Asia", date: "Noviembre 2025", type: "Web3" },
  { city: "Lisboa", event: "Lisbon Blockchain Week", date: "Diciembre 2025", type: "Web3" },
  { city: "Tokio", event: "ETH Tokyo", date: "Enero 2026", type: "Hackathon" },
  { city: "Londres", event: "London Web3 Expo", date: "Febrero 2026", type: "Web3" },
  { city: "São Paulo", event: "ETH São Paulo", date: "Marzo 2026", type: "Hackathon" },
  { city: "París", event: "Paris Blockchain Week", date: "Abril 2026", type: "Web3" },
  { city: "Estambul", event: "ETH Istanbul", date: "Mayo 2026", type: "Hackathon" },
  { city: "Sídney", event: "Sydney Web3 Summit", date: "Junio 2026", type: "Web3" },
  { city: "Dubái", event: "Dubai Crypto Expo", date: "Julio 2026", type: "Web3" },
  { city: "Johannesburgo", event: "ETH Africa", date: "Agosto 2026", type: "Hackathon" },
];

const GloboInteractivo = dynamic(() => import("../ui/globo-interactivo"), { ssr: false });

export function HomeSection() {
  const { openAuthModal } = useAuth();
  const [highlight, setHighlight] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Cargando...</div>; // Placeholder mientras se carga en el cliente
  }

  // Duplicar eventos para efecto de bucle
  const tickerEvents = [...EVENTS, ...EVENTS];

  return (
    <section className="w-full flex flex-col items-center min-h-[80vh] py-8 bg-[#111] rounded-3xl shadow-2xl mx-auto max-w-6xl">
      <Navbar />
      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 md:gap-12 p-6 md:p-12 items-start">
        {/* Columna izquierda: texto + botón */}
        <div className="flex flex-col justify-center gap-6 min-w-[280px] max-w-[440px] w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Tokeniza tu <span className="text-red-500">Mercancía Física</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Convierte productos físicos en NFTs para una experiencia Web3 única
            </p>
            <div className="bg-neutral-900 rounded-xl p-6 flex flex-col gap-4 w-full">
              <span className="font-semibold text-white">Comienza Ahora</span>
              <span className="text-gray-400 text-sm">Conecta tu wallet para empezar a tokenizar tu mercancía</span>
              <button
                className="bg-[#E71D36] hover:bg-[#3E3EF4] text-white font-bold py-3 rounded-lg transition-colors"
                onClick={openAuthModal}
              >
                Conectar Wallet →
              </button>
            </div>
            <div className="flex gap-6 mt-2">
              <div className="bg-neutral-900 rounded-lg px-6 py-4 text-center">
                <span className="text-2xl font-bold text-white">100+ </span>
                <div className="text-gray-400 text-sm">Eventos</div>
              </div>
              <div className="bg-neutral-900 rounded-lg px-6 py-4 text-center">
                <span className="text-2xl font-bold text-white">50K+ </span>
                <div className="text-gray-400 text-sm">NFTs Creados</div>
              </div>
            </div>
          </div>
        </div>
        {/* Columna derecha: globo */}
        <div className="flex items-start justify-center w-full h-[340px] md:h-[420px]">
          <GloboInteractivo highlight={highlight} color="red" />
        </div>
      </div>
      {/* Ticker de eventos */}
      <div className="w-full px-0 md:px-12 mt-8 overflow-hidden">
        <h3 className="text-lg font-semibold text-white mb-2 px-6">Próximos eventos Web3 y hackathones</h3>
        <div className="relative w-full overflow-hidden group">
          <div
            className="flex gap-4 animate-ticker whitespace-nowrap group-hover:[animation-play-state:paused]"
            style={{ animationDuration: '15s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
          >
            {tickerEvents.map((ev, idx) => (
              <div
                key={ev.city + idx}
                className="inline-block min-w-[220px] max-w-[240px] bg-neutral-800 rounded-xl p-4 mx-2 flex flex-col gap-2 border border-neutral-700 hover:border-red-500 transition-colors shadow-md"
                onMouseEnter={() => setHighlight(ev.city)}
                onMouseLeave={() => setHighlight(null)}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="text-white font-bold text-base">{ev.city}</span>
                </div>
                <span className="text-gray-200 text-sm font-semibold">{ev.event}</span>
                <span className="text-gray-400 text-xs">{ev.date}</span>
                <span className={`text-xs font-bold ${ev.type === "Hackathon" ? "text-yellow-400" : "text-red-400"}`}>{ev.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation-name: ticker;
        }
      `}</style>
    </section>
  );
}