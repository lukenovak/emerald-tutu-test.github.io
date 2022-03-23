import { getSiteLayout } from '@/layout'
import SEO from '@/components/seo'
import * as Marketing from '@/marketing'

export default function PageLayout({ children, page }) {
  const pageNewsletter = page?.marketing?.find(
    (block) => block.__typename === 'Newsletter'
  )
  
  return (
    <>
      {page?.seo && <SEO {...page.seo} />}

      <div>
        {children}
        {pageNewsletter && <Marketing.NewsletterSignup {...pageNewsletter} />}
      </div>
    </>
  )
}

export const getLayout = (page) => {
  return getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)
}
