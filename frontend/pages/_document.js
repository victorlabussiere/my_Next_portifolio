import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <meta charSet='utf-8' />
        <meta name='author' content='Victor Labussiere' />
        <meta name='description' content='Web Application developed with Next js by Victor Labussiere' />
        <meta name='keywords' content='React Javascript Frontend Junior UXDesigner NextJS NodeJS MirageJS' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
