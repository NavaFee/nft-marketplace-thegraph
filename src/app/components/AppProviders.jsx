"use client"

import { MoralisProvider } from "react-moralis"

export default function AppProviders({ children }) {
    return <MoralisProvider initializeOnMount={false}>{children}</MoralisProvider>
}
