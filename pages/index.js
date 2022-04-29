import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'

export default function IndexPage({ page }) {
  return (<div className='gradient-background h-100'>
      <div className='mx-auto my-3 d-block text-center'>
        <h1 className="font-monument">The Emerald Tutu</h1>
      </div>
    <Wrapper {...page} />
    </div>)
}

export async function getStaticProps({ locale, preview = true }) {
  const client = graphcmsClient(preview)

  const { page } = await client.request(pageQuery, {
    locale,
    slug: 'home'
  })

  const parsedPageData = await parsePageData(page)

  return {
    props: {
      page: parsedPageData,
      preview
    },
    revalidate: 60
  }
}

IndexPage.getLayout = getPageLayout
