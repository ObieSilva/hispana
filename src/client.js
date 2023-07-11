import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_WP_GRAPHQL_URL,
  headers: {
    'X-Desired-Endpoint': process.env.NODE_ENV
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});