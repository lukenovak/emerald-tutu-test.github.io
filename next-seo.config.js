const description = `The Emerald Tutu`
const title = `Emerald Tutu`
const url = `https://www.theemeraldtutu.com`

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
