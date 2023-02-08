import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <meta charSet='utf-8' />
        <meta name='author' content='Victor Labussiere' />
        <meta name='description' content='Web Application developed with Next js by Victor Labussiere' />
        <meta name='keywords' content='React Javascript Frontend Junior UXDesigner NextJS NodeJS MirageJS' />
        <title>Dev. Victor Labussiere</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
