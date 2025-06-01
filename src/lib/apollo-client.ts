import { ApolloClient, InMemoryCache } from '@apollo/client'

export const gqlClient = (headers?: Record<string, string>) =>
    new ApolloClient({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
        cache: new InMemoryCache(),
        headers: {
            ...headers,
            // 'x-api-key': process.env.X_API_KEY,
        },
    })
