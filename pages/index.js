import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'
import SiteHeading from '@/components/site-heading'

export default function IndexPage({ page }) {
  return (<div className='gradient-background h-100'>
      <div className='mx-auto my-3 d-block text-center'>
        <SiteHeading text="The Emerald Tutu"/>
      </div>
    <Wrapper {...page} />
    </div>)
}

export async function getStaticProps({preview = false }) {
  const client = graphcmsClient(preview)

  const { page } = await client.request(pageQuery, {
    //locale, * reenable if localizing on non-static export
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
