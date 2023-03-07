import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config.ts';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,100;1,400&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,100&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
