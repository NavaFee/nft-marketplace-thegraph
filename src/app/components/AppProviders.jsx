"use client"

import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

export default function AppProviders({ children }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>{children}</NotificationProvider>
        </MoralisProvider>
    )
}
