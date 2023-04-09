import '@/styles/globals.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
    <Script src="/jquery.js" />
    <Component {...pageProps} />
    <Script src="/main.js" />
  </>
}
