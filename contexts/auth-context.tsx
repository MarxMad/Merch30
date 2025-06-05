"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";

interface User {
  id: string;
  name: string;
  address?: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  signIn: (provider: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();
  const [user, setUser] = useState<User | null>(null);

  const openAuthModal = () => {
    open();
  };

  const closeAuthModal = () => {
    // El modal se cierra automáticamente al conectar
  };

  const signIn = async (provider: string) => {
    try {
      open();
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const signOut = async () => {
    try {
      // Desconectar la wallet usando AppKit
      await disconnect();
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // Actualizar el usuario cuando cambia la dirección
  useEffect(() => {
    if (isConnected && address) {
      setUser({
        id: address,
        name: address.slice(0, 6) + "..." + address.slice(-4),
        address: address,
      });
    } else {
      setUser(null);
    }
  }, [isConnected, address]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isConnected,
        user,
        openAuthModal,
        closeAuthModal,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
} 