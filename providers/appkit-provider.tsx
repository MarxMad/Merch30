"use client";

import { createAppKit } from '@reown/appkit/react';
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import type { Chain } from 'viem';

const queryClient = new QueryClient();
const projectId = 'acef4d9c48d2814a64d4b2be85ad665b';

const metadata = {
  name: 'Proof of Merch',
  description: 'Tokenización de Mercancía Física',
  url: 'https://proofofmerch.com',
  icons: [],
};

const networks = [mainnet, arbitrum];

const wagmiAdapter = new WagmiAdapter({
  networks: networks as any,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: networks as any,
  projectId,
  metadata,
  features: {
    analytics: true,
  },
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiConfig>
  );
} 