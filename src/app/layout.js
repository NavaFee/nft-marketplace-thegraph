import "./globals.css"
import { Inter } from "next/font/google"
import AppProviders from "./components/AppProviders"
import Header from "./components/Header"
import { ApolloWrapper } from "./components/apollo-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "NFT Marketplace",
    description: "NFT Marketplace",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./favicon.ico" />
            </head>
            <body className={`${inter.className} bg-no-repeat`}>
                <AppProviders>
                    <Header />
                    {children}
                </AppProviders>
            </body>
        </html>
    )
}
