import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-w-2xl text-text bg-background mx-2 md:mx-auto no-scrollbar">
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
