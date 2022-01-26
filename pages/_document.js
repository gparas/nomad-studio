import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="We create architectural experiences informed by tradition and inspired by contemporary life. Our contextual approach produces unique and immersive experiences through Architecture, Interior and Landscape Design."
            key="description"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Forum&family=InterInter:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
