import { gql } from "@apollo/client";

export const HOME_QUERIES = gql`
  query NewQuery {
    pages {
      edges {
        node {
          title
          home {
            currentSermon
            sermonTitle
            ministries {
              ministryDescription
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
