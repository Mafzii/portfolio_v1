import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-w-2xl pt-16 text-text bg-background mx-auto no-scrollbar">
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
