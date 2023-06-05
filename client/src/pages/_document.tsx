import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() { 
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body className='bg-main-gray-main '>
        
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}

