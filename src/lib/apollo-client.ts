import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

const httpLink = new HttpLink({
    uri: `http://${process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT}`,
})

const wsLink = new GraphQLWsLink(
    createClient({
        url: `ws://${process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT}`,
    }),
)

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink,
)

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export const gqlClient = (headers?: Record<string, string>) =>
    new ApolloClient({
        link: splitLink,
        // uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
        cache: new InMemoryCache(),
        headers: {
            ...headers,
            // 'x-api-key': process.env.X_API_KEY,
        },
    })
