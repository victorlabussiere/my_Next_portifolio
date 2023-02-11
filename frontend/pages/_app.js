import '../styles/globals/globals.css'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Victor Labussiere | Frontend Dev</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
