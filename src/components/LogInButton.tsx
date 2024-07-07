"use client"
import { Button } from '@nextui-org/react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import React from 'react'

function LogInButton() {
    const { ready, login, authenticated } = usePrivy();
    const {wallets} = useWallets()
    
     return (
        <Button onClick={() => ready && login()} className="absolute top-5 right-5">
            {authenticated ?  `${wallets[0].address.slice(0, 6)}...${wallets[0].address.slice(-4)}`  : 'LogIn'}
        </Button>
    )
}

export default LogInButton