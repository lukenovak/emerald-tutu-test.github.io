import { getSiteLayout } from '@/layout'
import SEO from '@/components/seo'

export default function PageLayout({ children, page }) {
  return (
    <>
      {page?.seo && <SEO {...page.seo} />}

      <div>
        {children}
      </div>
    </>
  )
}

export const getLayout = (page) => {
  return getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)
}
