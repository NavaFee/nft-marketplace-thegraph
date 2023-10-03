import { gql } from "@apollo/client"
import { getClient } from "../components/client"

const query = gql`
    query GetActiveItems {
        activeItems(first: 5, where: { buyer: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

export default async function Page() {
    const { data } = await getClient().query({ query })
    console.log(data)
    return (
        <div>
            <div>Hi</div>
        </div>
    )
}
