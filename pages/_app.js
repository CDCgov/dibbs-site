import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

import '../styles/scss/custom.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
