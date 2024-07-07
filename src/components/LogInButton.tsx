"use client"
import { Button } from '@nextui-org/react';
import { usePrivy } from '@privy-io/react-auth';
import React from 'react'

function LogInButton() {
    const { ready, login } = usePrivy();
    return (
        <Button onClick={() => ready && login()} className="absolute top-5 right-5">
            LogIn
        </Button>
    )
}

export default LogInButton