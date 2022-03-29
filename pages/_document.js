import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link
            rel="preload"
            href="/fonts/MonumentVentileFullmoonGX.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            href="https://unpkg.com/@csstools/normalize.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
