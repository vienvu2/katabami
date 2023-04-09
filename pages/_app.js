import '@/styles/globals.scss'
import '@/styles/slick.css'


import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script src="/js/jquery.js" />
    <Script src="/js/slick.js" />
    <Script src="/js/main.js" />
  </>
}
