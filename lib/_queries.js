import { gql } from 'graphql-request'

const blogPageQuery = gql`
  fragment BlogPostFields on BlogPost {
    id
    authors {
      id
      name
      photo {
        id
        url
      }
      role
    }
    category
    content
    coverImage {
      id
      height
      url
      width
    }
    excerpt
    published
    slug
    title
  }

  query BlogPageQuery($locale: Locale!) {
    page(locales: [$locale, en], where: { slug: "blog" }) {
      id
      footer {
        id
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
          id
          navigationLabel
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
      }
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
    }
    posts: blogPosts(orderBy: published_DESC) {
      ...BlogPostFields
    }
  }
`

const blogPostQuery = gql`
  query BlogPostQuery($locale: Locale!, $slug: String!) {
    allPosts: blogPosts(locales: [$locale, en], orderBy: published_ASC) {
      id
      slug
      title
    }
    page(where: { slug: "blog" }) {
      footer {
        id
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
          id
          navigationLabel
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
      }
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
    }
    post: blogPost(where: { slug: $slug }) {
      id
      authors {
        id
        name
        photo {
          id
          url
        }
        role
      }
      category
      content
      coverImage {
        id
        height
        url
        width
      }
      excerpt
      published
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
      slug
      title
    }
  }
`

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

export { blogPageQuery, blogPostQuery, pageQuery }
