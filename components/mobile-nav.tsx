"use client";

import { Home, Layout, Activity, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: Home, label: "Inicio" },
    { href: "/caracteristicas", icon: Layout, label: "Funciones" },
    { href: "/proceso", icon: Activity, label: "Reclamar Merch" },
    { href: "/perfil", icon: User, label: "Perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-[#030330]/90 backdrop-blur-md border-t border-[#222]">
      <div className="max-w-lg mx-auto h-16">
        <div className="grid h-full grid-cols-4">
          {links.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-colors text-white font-medium",
                pathname === href
                  ? "text-[#E71D36] border-t-2 border-[#E71D36] bg-[#030330]/80"
                  : "hover:text-[#3E3EF4]"
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}