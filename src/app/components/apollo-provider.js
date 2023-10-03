"use client"

import { ApolloLink, HttpLink } from "@apollo/client"
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"

function makeClient() {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_QUERY_URL,
    })

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    })
}

export function ApolloWrapper({ children }) {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}

//   const { data } = useSuspenseQuery(query);
