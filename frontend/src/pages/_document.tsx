import Document, { Head, Html, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" className="h-full bg-gray-50 js-focus-visible">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4dacdb" />
          <meta name="application-name" content="Cl&iacute;nica.Work" />
          <meta name="msapplication-TileColor" content="#4dacdb" />
          <meta name="theme-color" content="#4dacdb" />
          {/* <GoogleAnalyticsImplementation /> */}
        </Head>
        <body className="font-regular antialiased text-gray-900 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
