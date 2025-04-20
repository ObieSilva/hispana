// src/wpgraphql/queries.jsx
import { gql } from "@apollo/client";

export const HOME_QUERIES = gql`
  query NewQuery {
    pages(where: { name: "home" }) {
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
            eventDetails {
              eventDate
              eventLocation
              eventPage {
                ... on Page {
                  id
                  uri
                  title
                }
              }
            }
            heroSlides {
              content {
                button {
                  ... on Page {
                    id
                    uri
                  }
                }
                header
                paragraph
                tag
              }
              image {
                sourceUrl
              }
              imageTools {
                gradient
                position
              }
            }
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

export const GET_SERMONS = gql`
  query GetSermons {
    sermons {
      nodes {
        id
        title
        slug
        excerpt(format: RAW) # Get raw excerpt to handle truncation on frontend
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        sermonDetails {
          youtubeUrl
          speaker
          sermonDate
          serviceType
        }
      }
    }
  }
`;

export const GET_MINISTRIES = gql`
  query GetMinistries {
    ministries {
      nodes {
        id
        title
        slug
        excerpt(format: RAW)
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
            mediaItemUrl
          }
        }
        ministryDetails {
          leader
          meetingTime
          contactEmail
          ageGroup
          isActive
        }
      }
    }
  }
`;
