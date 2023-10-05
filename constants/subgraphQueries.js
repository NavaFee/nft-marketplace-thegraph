import { gql } from "@apollo/client"

const query = gql`
    {
        activeItems(where: { buyer: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`
export default query
