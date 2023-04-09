import '@/styles/globals.scss'
import '@/styles/slick.css'


import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script src="/jquery.js" />
    <Script src="/slick.js" />
    <Script src="/main.js" />
  </>
}
