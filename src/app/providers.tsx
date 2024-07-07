'use client'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { PrivyProvider } from '@privy-io/react-auth';
import { sepolia } from 'viem/chains';

const queryClient = new QueryClient()
function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                <PrivyProvider
                    appId="clyayk82e07hzqhbnz0s0m6k3"
                    config={{
                        // Customize Privy's appearance in your app
                        appearance: {
                            theme: 'light',
                            accentColor: '#676FFF',
                            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUwkIcNQ4q8_EtK3GrYFl1f_6b7ADB_mHEw&s',
                        },
                        // Create embedded wallets for users who don't have a wallet
                        embeddedWallets: {
                            createOnLogin: 'users-without-wallets',
                        },
                        defaultChain: sepolia
                    }}
                >

                    {children}
                </PrivyProvider>
            </QueryClientProvider>
        </NextUIProvider>
    )
}
export default Providers