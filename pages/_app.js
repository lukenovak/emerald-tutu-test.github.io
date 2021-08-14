import { DefaultSeo } from 'next-seo'

import { SiteLayout } from '@/layout'

import { defaultSEO } from '../next-seo.config'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
