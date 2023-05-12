import { gql } from "@apollo/client";

export const HOME_QUERIES = gql`
  query NewQuery {
    pages {
      edges {
        node {
          title
          home {
            currentSermon
            ministries {
              description
              image {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;
