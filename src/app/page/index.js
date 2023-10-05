"use client"

import NFTBox from "../components/NFTBox"

import { useMoralis } from "react-moralis"
import networkMapping from "../../../constants/networkMapping.json"
import query from "../../../constants/subgraphQueries"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const marketplaceAddress = chainId ? networkMapping[chainString].NftMarketplace[0] : null

    const { loading, error, data: listedNfts } = useSuspenseQuery(query)
    console.log(listedNfts)

    return (
        <div classname="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled && chainId ? (
                    loading || !listedNfts ? (
                        <div>Loading......</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            const { price, nftAddress, tokenId, seller } = nft
                            console.log("-============-", nftAddress)
                            console.log("tokenID==================", tokenId)
                            return marketplaceAddress ? (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            ) : (
                                <div>Network error, please switch to a supported network...</div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
            <NFTBox />
        </div>
    )
}
