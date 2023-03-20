//ApolloClient
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_WP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});
