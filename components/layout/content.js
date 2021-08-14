import { getSiteLayout } from '@/layout'

export default function ContentLayout({ children, page }) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

export const getLayout = (page) => {
  return getSiteLayout(<ContentLayout {...page.props}>{page}</ContentLayout>)
}
