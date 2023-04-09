import '@/styles/globals.scss'
import '@/styles/slick.css'


import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
    <Script src="/jquery.js" />
    <Component {...pageProps} />
    <Script src="/slick.js" />
    <Script src="/main.js" />
  </>
}
