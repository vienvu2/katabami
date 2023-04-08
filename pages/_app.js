import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  document.title = 'Katabami Clinic'
  return <Component {...pageProps} />
}
