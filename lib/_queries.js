import { gql } from 'graphql-request'

const pageQuery = gql`
  query PageQuery($slug: String!) {
    page(where: { slug: $slug }) {
      slug
      blocks {
        __typename
        ... on BigMenu {
          id
          pages {
            title
            pageNumber
            id
            blocks {
              ... on Section {
                name
                id
                slug
              }
            }
            slug
          }
        }
        ... on Section {
          id
          name
          contents {
            __typename
            ... on Text {
              paragraphs
              isBlueBackground
            }
            ... on Picture {
              id
              photo {
                height
                width
                url
              }
              altText
              caption
            }
            ... on TooltipPicture {
              annotatedPhoto {
                picture {
                  photo {
                    height
                    width
                    url
                  }
                }
                tooltip {
                  id
                  xPos
                  yPos
                  number
                  text
                }
              }
            }
            ... on PersonList {
              people {
                name
                title
                photo {
                  height
                  url
                  width
                }
                bio
              }
            }
            ... on VimeoEmbeddable {
              videoID
              iframeSrc
            }
            ... on ImageCarousel {
              images {
                height
                width
                url
              }
              id
            }
            ... on CollapsibleText {
              text
              highlight
              heading
            }
          }
        }
      }
      id
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      subtitle
      title
      footer {
        pages(where: {slug_not: "home"} orderBy: pageNumber_ASC) {
          id
          title
          pageNumber
          blocks {
            __typename
            ... on Section {
              id
              name
            }
          }
          slug
        }
        address
      }
      header
    }
  }
`

export { pageQuery }
