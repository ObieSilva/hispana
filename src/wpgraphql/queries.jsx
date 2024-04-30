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
            informationBanner {
              displayBanner
              information
            }
            topBanner {
              displayBanner
              information
            }
            upComingEvent
          }
        }
      }
    }
  }
`;

export const DEFAULT_PAGE_TEMPLATE = gql`
  query NewQuery {
    pages {
      edges {
        node {
          id
          slug
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const MAIN_MENU = gql`
  query {
    menus {
      nodes {
        name
        menuItems {
          edges {
            node {
              label
              uri
            }
          }
        }
      }
    }
  }
`;