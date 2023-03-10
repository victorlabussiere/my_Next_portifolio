import '../styles/globals/globals.css'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Victor Labussiere | Frontend Dev</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  )
}
