import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles)],
    };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=Raleway:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&display=swap"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=Raleway:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&display=swap"
            />
          </noscript>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Carmelinda Araújo" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Carmelinda Araújo" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
