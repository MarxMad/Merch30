"use client";

import { QrCode, Shield, BarChart, Key, Users, Globe, Lock, Gift, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useClient } from "wagmi";

export default function CaracteristicasPage() {
  const features = [
    {
      icon: <QrCode className="h-9 w-9 drop-shadow-glow" />,
      title: "Reclamo por QR",
      description: "Escanea el código QR en tu mercancía para reclamar tu NFT"
    },
    {
      icon: <Shield className="h-9 w-9 drop-shadow-glow" />,
      title: "Certificado Digital",
      description: "Tu NFT actúa como prueba de propiedad de la mercancía física"
    },
    {
      icon: <BarChart className="h-9 w-9 drop-shadow-glow" />,
      title: "Análisis",
      description: "Seguimiento de participación y estadísticas de uso"
    },
    {
      icon: <Key className="h-9 w-9 drop-shadow-glow" />,
      title: "Acceso Exclusivo",
      description: "Desbloquea experiencias únicas con tu NFT"
    },
    {
      icon: <Users className="h-9 w-9 drop-shadow-glow" />,
      title: "Comunidad",
      description: "Únete a una comunidad exclusiva de propietarios de NFTs"
    },
    {
      icon: <Globe className="h-9 w-9 drop-shadow-glow" />,
      title: "Verificación Global",
      description: "Verifica la autenticidad de tu mercancía en cualquier parte del mundo"
    },
    {
      icon: <Lock className="h-9 w-9 drop-shadow-glow" />,
      title: "Seguridad Blockchain",
      description: "Protección garantizada por la tecnología blockchain"
    },
    {
      icon: <Gift className="h-9 w-9 drop-shadow-glow" />,
      title: "Beneficios Especiales",
      description: "Accede a descuentos y ofertas exclusivas con tu NFT"
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E71D36]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3E3EF4]/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Header con Logo */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/LogomerchW.svg"
            alt="Merch of Proof Logo"
            width={220}
            height={220}
            className="mb-4 drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white tracking-tight mb-2">Características</h1>
        </div>

        {/* Diagrama de Flujo */}
        <div className="bg-[#030330cc] border border-[#E71D36] rounded-3xl p-8 mb-12 shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">¿Cómo Funciona?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-[#E71D36]/20 flex items-center justify-center mb-3 shadow-lg">
                <QrCode className="h-10 w-10 text-[#E71D36]" />
              </div>
              <p className="text-white font-medium text-lg">1. Escanea el QR o Introduce el código</p>
            </div>
            <ArrowRight className="h-10 w-10 text-[#E71D36] hidden md:block" />
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-[#E71D36]/20 flex items-center justify-center mb-3 shadow-lg">
                <Shield className="h-10 w-10 text-[#E71D36]" />
              </div>
              <p className="text-white font-medium text-lg">2. Reclama tu NFT</p>
            </div>
            <ArrowRight className="h-10 w-10 text-[#E71D36] hidden md:block" />
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-[#E71D36]/20 flex items-center justify-center mb-3 shadow-lg">
                <Key className="h-10 w-10 text-[#E71D36]" />
              </div>
              <p className="text-white font-medium text-lg">3. Desbloquea Beneficios</p>
            </div>
          </div>
        </div>

        {/* Grid de Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-[#030330cc] border border-[#E71D36] rounded-3xl p-8 flex flex-col items-center shadow-xl backdrop-blur-lg transition-all duration-200 hover:scale-[1.04] hover:shadow-2xl hover:border-[#3E3EF4] active:scale-95"
              style={{ boxShadow: "0 4px 32px 0 #E71D3640, 0 1.5px 0 #fff2 inset" }}
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#E71D36]/10 mb-4 animate-fade-in">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-white text-center mb-2 drop-shadow-sm tracking-wide animate-fade-in-delay">
                {feature.title}
              </h3>
              <p className="text-base text-gray-300 text-center animate-fade-in-delay2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de Beneficios */}
        <div className="bg-[#030330cc] border border-[#E71D36] rounded-3xl p-10 mt-16 shadow-2xl max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Beneficios Adicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-6">
              <div className="h-14 w-14 rounded-full bg-[#E71D36]/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Gift className="h-8 w-8 text-[#E71D36]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Descuentos Exclusivos</h3>
                <p className="text-gray-300">Accede a ofertas especiales y descuentos en futuras compras.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="h-14 w-14 rounded-full bg-[#E71D36]/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="h-8 w-8 text-[#E71D36]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Comunidad VIP</h3>
                <p className="text-gray-300">Únete a una comunidad exclusiva de propietarios de NFTs.</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .drop-shadow-glow {
            filter: drop-shadow(0 0 8px #E71D36) drop-shadow(0 0 2px #fff8);
            color: #E71D36;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both; }
          .animate-fade-in-delay { animation: fade-in 0.9s 0.1s cubic-bezier(.4,0,.2,1) both; }
          .animate-fade-in-delay2 { animation: fade-in 1.1s 0.2s cubic-bezier(.4,0,.2,1) both; }
          .animate-pulse-slow {
            animation: pulse 6s cubic-bezier(.4,0,.6,1) infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}