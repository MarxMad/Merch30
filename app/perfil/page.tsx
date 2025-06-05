"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, QrCode, Trophy, Copy, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useAppKitAccount } from "@reown/appkit/react";
import { useBalance } from "wagmi";
import { useState } from "react";
import Image from "next/image";

const nftsEjemplo = [
  {
    name: "Playera Exclusiva",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    desc: "NFT de la merch oficial"
  },
  {
    name: "Gorra Edición Limitada",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    desc: "NFT de la merch oficial"
  },
  {
    name: "Termo Merch3",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    desc: "NFT de la merch oficial"
  }
];

export default function PerfilPage() {
  const { isAuthenticated, openAuthModal, signOut, user } = useAuth();
  const { address } = useAppKitAccount();
  const { data: balanceData } = useBalance({ address: address as `0x${string}` });
  const [copied, setCopied] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-3xl font-extrabold text-white mb-4">Conecta tu Wallet</h1>
        <p className="text-gray-300 mb-6 text-center max-w-xs">Debes conectar tu wallet para ver tu perfil y tus NFTs.</p>
        <Button className="bg-[#E71D36] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-[#3E3EF4] transition-all" onClick={openAuthModal}>
          Conectar Wallet
        </Button>
      </div>
    );
  }

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black py-10 px-2 flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-8">
        {/* Card principal */}
        <Card className="p-8 flex flex-col md:flex-row items-center md:items-start gap-8 bg-[#18181b]/80 border border-[#3E3EF4]/30 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center md:items-start flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#E71D36] to-[#3E3EF4] flex items-center justify-center shadow-lg">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">Mi Perfil</h1>
                <p className="text-sm text-gray-400">Dashboard de usuario</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-4 w-full">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">Wallet:</span>
                <span className="font-mono text-sm text-white bg-[#232336] px-2 py-1 rounded-lg select-all">
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "-"}
                </span>
                <Button size="icon" variant="ghost" onClick={handleCopy} className="ml-1">
                  {copied ? <CheckCircle2 className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5 text-gray-400" />}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">Balance:</span>
                <span className="font-mono text-base text-[#E71D36]">
                  {balanceData ? `${Number(balanceData.formatted).toFixed(4)} ${balanceData.symbol}` : "-"}
                </span>
              </div>
            </div>
            <Button 
              className="mt-2 w-full md:w-auto bg-[#E71D36] text-white font-bold px-6 py-2 rounded-xl shadow-lg hover:bg-[#3E3EF4] transition-all"
              variant="outline"
              onClick={signOut}
            >
              Desconectar Wallet
            </Button>
          </div>
          {/* Estadísticas */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <Card className="bg-[#232336] border-none p-6 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-7 w-7 text-[#E71D36]" />
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <span className="text-gray-300 text-sm">NFTs Reclamados</span>
            </Card>
            <Card className="bg-[#232336] border-none p-6 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="h-7 w-7 text-[#3E3EF4]" />
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <span className="text-gray-300 text-sm">Eventos Asistidos</span>
            </Card>
          </div>
        </Card>

        {/* NFTs */}
        <Card className="p-8 bg-[#18181b]/80 border border-[#3E3EF4]/30 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><ImageIcon className="h-7 w-7 text-[#E71D36]" /> Mis NFTs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {nftsEjemplo.map((nft, i) => (
              <div key={i} className="rounded-2xl bg-[#232336] p-4 flex flex-col items-center shadow-lg border border-[#3E3EF4]/10">
                <Image src={nft.image} alt={nft.name} width={160} height={160} className="rounded-xl mb-3 object-cover border-2 border-[#3E3EF4]/20" />
                <div className="font-bold text-white text-lg mb-1">{nft.name}</div>
                <div className="text-gray-400 text-sm text-center mb-2">{nft.desc}</div>
                <span className="text-xs text-[#E71D36] bg-[#E71D36]/10 px-2 py-1 rounded">NFT</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}