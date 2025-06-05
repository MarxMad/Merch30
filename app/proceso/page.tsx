"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QrCode, Share2, Shirt, CupSoda, Circle } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuth } from "@/contexts/auth-context";

const productos: Record<string, { nombre: string; imagen: string; icon: JSX.Element }> = {
  "123": {
    nombre: "Playera Exclusiva",
    imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    icon: <Shirt className="h-8 w-8 text-[#E71D36]" />
  },
  "456": {
    nombre: "Gorra Edición Limitada",
    imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    icon: <Circle className="h-8 w-8 text-[#E71D36]" />
  },
  "789": {
    nombre: "Termo Merch3",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    icon: <CupSoda className="h-8 w-8 text-[#E71D36]" />
  }
};

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" fill="currentColor"/></svg>
);

const FarcasterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><rect width="32" height="32" rx="16" fill="#8C66FC"/><path d="M10.5 10.5h11v11h-11v-11zm1.5 1.5v8h8v-8h-8z" fill="#fff"/></svg>
);

const QrReader = dynamic(() => import("react-qr-reader").then(mod => mod.QrReader), { ssr: false });

export default function ProcesoPage() {
  const { isAuthenticated, openAuthModal } = useAuth();
  const [claimCode, setClaimCode] = useState("");
  const [claimed, setClaimed] = useState(false);
  const [protocol, setProtocol] = useState("");
  const [showScanner, setShowScanner] = useState(false);

  const producto = productos[claimCode];
  const mensaje = `Acabas de Reclamar Merch exclusiva de ${protocol || "____"} protocolo / empresa. Powered by Merch3 @merch3_`;

  const handleClaim = async () => {
    setClaimed(true);
  };

  const shareTwitter = () => {
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(mensaje)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareFarcaster = () => {
    const url = window.location.href;
    const farcasterUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(mensaje + " " + url)}`;
    window.open(farcasterUrl, "_blank");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-3xl font-extrabold text-white mb-4">Conecta tu Wallet</h1>
        <p className="text-gray-300 mb-6 text-center max-w-xs">Debes conectar tu wallet para reclamar tu merch y acceder a esta funcionalidad.</p>
        <Button className="bg-[#E71D36] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-[#3E3EF4] transition-all" onClick={openAuthModal}>
          Conectar Wallet
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-2 bg-black">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-white drop-shadow">Reclamar Merch</h1>
      <div className="text-center text-base text-gray-300 mb-6">
        Ejemplos de códigos: <span className="font-mono bg-gray-800 px-2 py-1 rounded">123</span>, <span className="font-mono bg-gray-800 px-2 py-1 rounded">456</span>, <span className="font-mono bg-gray-800 px-2 py-1 rounded">789</span>
      </div>

      <div className="w-full max-w-md">
        {!claimed ? (
          <Card className="p-6 space-y-6 w-full shadow-2xl border border-[#3E3EF4]/30 bg-[#18181b]/80 rounded-2xl">
            <div className="flex items-center space-x-2 text-primary justify-center">
              <QrCode className="h-7 w-7 text-[#E71D36]" />
              <h2 className="font-semibold text-lg text-white">Escanea o Ingresa Código</h2>
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Ingresa el código de tu merch"
                value={claimCode}
                onChange={(e) => setClaimCode(e.target.value)}
                className="text-center text-lg bg-black/60 border border-[#3E3EF4]/30 text-white focus:border-[#E71D36]"
              />
              <Button
                type="button"
                className="bg-[#3E3EF4] hover:bg-[#E71D36] text-white font-bold px-3 py-2 rounded-xl shadow-lg transition-all"
                onClick={() => setShowScanner(true)}
                title="Escanear QR"
              >
                <QrCode className="h-6 w-6" />
              </Button>
            </div>
            {showScanner && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <div className="bg-[#18181b] rounded-2xl p-4 shadow-2xl flex flex-col items-center">
                  <h3 className="text-lg font-bold text-white mb-2">Escanea tu código QR</h3>
                  <div className="w-[90vw] max-w-xs">
                    <QrReader
                      constraints={{ facingMode: "environment" }}
                      onResult={(result: any, error: any) => {
                        if (!!result) {
                          setClaimCode(result?.text || "");
                          setShowScanner(false);
                        }
                      }}
                      containerStyle={{ width: "100%" }}
                    />
                  </div>
                  <Button className="mt-4 w-full" onClick={() => setShowScanner(false)}>Cerrar</Button>
                </div>
              </div>
            )}
            {producto && (
              <div className="flex flex-col items-center mt-2">
                <Image src={producto.imagen} alt={producto.nombre} width={180} height={180} className="rounded-2xl shadow-lg mb-2 object-cover border-4 border-[#3E3EF4]/30" />
                <div className="flex items-center gap-2 mt-1">
                  {producto.icon}
                  <span className="font-semibold text-base text-white">{producto.nombre}</span>
                </div>
              </div>
            )}
            <Button 
              className="w-full bg-gradient-to-r from-[#E71D36] to-[#3E3EF4] text-white font-bold py-3 rounded-xl mt-4 shadow-lg hover:from-[#3E3EF4] hover:to-[#E71D36] transition-all"
              onClick={handleClaim}
              disabled={!claimCode}
            >
              Reclamar NFT
            </Button>
          </Card>
        ) : (
          <Card className="p-8 space-y-6 w-full shadow-2xl border border-[#3E3EF4]/30 bg-[#18181b]/80 rounded-2xl flex flex-col items-center">
            <h2 className="font-extrabold text-center text-2xl md:text-3xl text-white mb-2">¡NFT Reclamado con Éxito!</h2>
            <p className="text-base text-gray-300 text-center mb-2">
              Tu NFT ha sido enviado a tu wallet
            </p>
            {producto && (
              <div className="flex flex-col items-center mt-2">
                <Image src={producto.imagen} alt={producto.nombre} width={200} height={200} className="rounded-2xl shadow-lg mb-2 object-cover border-4 border-[#3E3EF4]/30" />
                <div className="flex items-center gap-2 mt-1">
                  {producto.icon}
                  <span className="font-semibold text-lg text-white">{producto.nombre}</span>
                </div>
              </div>
            )}
            <Input
              type="text"
              placeholder="Nombre del protocolo o empresa"
              value={protocol}
              onChange={(e) => setProtocol(e.target.value)}
              className="text-center bg-black/60 border border-[#3E3EF4]/30 text-white focus:border-[#E71D36]"
            />
            <div className="flex flex-col md:flex-row gap-3 w-full mt-2 max-w-full">
              <Button className="flex-1 min-w-0 w-full max-w-xs mx-auto bg-gradient-to-r from-[#1DA1F2] to-[#3E3EF4] text-white font-bold py-3 rounded-xl shadow-lg hover:from-[#3E3EF4] hover:to-[#1DA1F2] transition-all flex items-center justify-center text-base" onClick={shareTwitter}>
                <TwitterIcon /> Compartir en Twitter
              </Button>
              <Button className="flex-1 min-w-0 w-full max-w-xs mx-auto bg-gradient-to-r from-[#8C66FC] to-[#027AFF] text-white font-bold py-3 rounded-xl shadow-lg hover:from-[#027AFF] hover:to-[#8C66FC] transition-all flex items-center justify-center text-base whitespace-nowrap px-2" style={{letterSpacing: 0}} onClick={shareFarcaster}>
                <FarcasterIcon /> Compartir en Farcaster
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}