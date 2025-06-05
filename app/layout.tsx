import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MobileNav } from '@/components/mobile-nav';

import { AuthProvider } from '@/contexts/auth-context';
import { AppKitProvider } from '@/providers/appkit-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Proof of Merch - Tokenización de Mercancía Física',
  description: 'Convierte mercancía de eventos en NFTs para engagement Web3',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/LogomerchW.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <AppKitProvider>
          <AuthProvider>
            
            <main className="mobile-content">{children}</main>
            <MobileNav />
          </AuthProvider>
        </AppKitProvider>
      </body>
    </html>
  );
}