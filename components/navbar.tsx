"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Funciones", href: "/caracteristicas" },
  { label: "Reclamar Merch", href: "/proceso" },
  { label: "Perfil", href: "/perfil" },
];

export default function Navbar() {
  const { openAuthModal, isAuthenticated, user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 z-40 w-[95vw] max-w-5xl -translate-x-1/2">
      {/* Desktop navbar */}
      <div className="hidden md:flex items-center justify-between px-8 py-3 bg-[#030330]/90 backdrop-blur-md rounded-2xl shadow-lg border border-[#222]">
        {/* Logo y branding */}
        <Link href="/" className="flex flex-col items-start justify-center gap-0 group">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">Proof of Merch</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-xs text-white/60">powered by</span>
            <Image src="/LogomerchW.svg" alt="Logo grande" width={100} height={100} className="ml-1" />
          </div>
        </Link>
        {/* Links */}
        <div className="flex gap-6 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 font-medium transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3E3EF4] after:transition-all after:duration-300 hover:after:w-full hover:after:h-0.5 hover:text-[#3E3EF4]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Botón conectar/desconectar */}
        {isAuthenticated ? (
          <button
            className="ml-8 px-5 py-2 rounded-xl bg-[#030330] text-white font-semibold border border-[#3E3EF4] hover:bg-[#E71D36] hover:text-white transition-colors shadow"
            onClick={signOut}
          >
            Desconectar ({user?.name || "Wallet"})
          </button>
        ) : (
          <button
            className="ml-8 px-5 py-2 rounded-xl bg-[#E71D36] text-white font-bold hover:bg-[#3E3EF4] hover:text-white transition-colors shadow"
            onClick={openAuthModal}
          >
            Conectar Wallet
          </button>
        )}
      </div>
      {/* Mobile navbar */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 bg-[#030330]/90 backdrop-blur-md rounded-xl shadow border border-[#222]">
        <Link href="/" className="flex flex-col items-start justify-center gap-0 group">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-white">Proof of Merch</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-xs text-white/60">powered by</span>
            <Image src="/LogomerchW.svg" alt="Logo grande" width={100} height={100} className="ml-1" />
          </div>
        </Link>
        <button onClick={() => setMobileOpen((v) => !v)}>
          <Menu className="text-white w-7 h-7" />
        </button>
      </div>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[120] bg-[#030330] bg-opacity-100 backdrop-blur-lg flex items-center justify-start h-full pt-40 pl-20">
          <div className="relative flex flex-col items-center gap-6 bg-[#18181b] rounded-2xl shadow-2xl border border-[#3E3EF4]/40 px-8 py-10 w-[90vw] max-w-xs">
            {/* Botón cerrar */}
            <button
              className="absolute top-4 right-4 text-white hover:text-[#E71D36] transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="w-7 h-7" />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl text-white font-bold hover:text-[#3E3EF4] transition-colors w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                className="w-full px-6 py-3 rounded-xl bg-[#030330] text-white font-semibold border border-[#3E3EF4] hover:bg-[#E71D36] hover:text-white transition-colors shadow"
                onClick={() => {
                  setMobileOpen(false);
                  signOut();
                }}
              >
                Desconectar ({user?.name || "Wallet"})
              </button>
            ) : (
              <button
                className="w-full px-6 py-3 rounded-xl bg-[#E71D36] text-white font-bold hover:bg-[#3E3EF4] hover:text-white transition-colors shadow"
                onClick={() => {
                  setMobileOpen(false);
                  openAuthModal();
                }}
              >
                Conectar Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}