import { Html, Head, Main, NextScript } from 'next/document'
import wazowski from '../assets/wazowski.png'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
