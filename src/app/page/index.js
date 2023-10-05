"use client"
import NFTBox from "../components/NFTBox"

import { useMoralis } from "react-moralis"

export default function Home() {
    return (
        // How do we show the recently listed NFTs?

        // we will read from a database that has all the mappings in an
        // easier to read data structure.

        // We will index the events off-chain and then read them from our database.
        // Setup a server to listen for those events to be fired, and we will add them to a database to query.

        // TheGraph does this in a decentralized way
        // Moralis does it in a centralized way and comes with a ton of other features

        // All our logic is still 100% on-chain/
        // Speed & Development time.
        // Its really hard to start a prod blockchain project 100% decentralized.
        // They are working on open sourcing their code.
        // Feature richness
        // We can create more features with a centralized back end to start
        // As more decentralized tools are being created.
        // Local development
        <div>
            <NFTBox></NFTBox>
        </div>
    )
}
