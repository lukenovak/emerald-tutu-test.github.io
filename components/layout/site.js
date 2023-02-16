import Link from 'next/link'
import Footer from '../footer'
import Header from '../header'

function PreviewBanner({ enabled = false }) {
  if (!enabled) return null

  return (
    <div
      style={{
        textColor: 'white',
        backgroundColor: 'black',
        textAlign: 'center',
        padding: '16px'
      }}
    >
      Preview Mode Enabled (Content served from DRAFT) &mdash;&nbsp;
      <Link href="/api/exit-preview">
        <a>Exit Preview Mode</a>
      </Link>
    </div>
  )
}

export default function SiteLayout({ children, page, preview = true }) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}
    >
      <PreviewBanner enabled={false} />
      {page?.header && page?.footer && <Header {...page.footer}/>}
      <div style={{ flexGrow: 1, marginTop: page?.header && "2rem"}}>{children}</div>
      {page?.footer && <Footer {...page.footer} />}
    </div>
  )
}

export const getLayout = (page) => (
    <SiteLayout {...page.props}>{page}</SiteLayout>
)
