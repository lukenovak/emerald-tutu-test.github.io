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
  query PageQuery($locale: Locale!, $slug: String!) {
    page(locales: [$locale, en], where: { slug: $slug }) {
      slug
      blocks {
        __typename
        ... on BigMenu {
          pages {
            title
            pageNumber
            blocks {
              ... on Section {
                name
                slug
              }
            }
            slug
          }
        }
        ... on Section {
          name
          contents {
            __typename
            ... on Text {
              text
              isBlueBackground
            }
            ... on Picture {
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
          title
          pageNumber
          blocks {
            __typename
            ... on Section {
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
