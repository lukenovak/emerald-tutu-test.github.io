const description = `Learn how to build modern marketing websites, with localization and SEO, using GraphCMS, NextJS, Chakra UI, and Vercel.`
const title = `Emerald Tutu`
const url = `https://marketing-websites.withheadlesscms.com`

const seo = {
  title,
  titleTemplate: '%s | Emerald Tutu',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@',
    site: '@'
  }
}

export { seo as defaultSEO, url as defaultUrl }
