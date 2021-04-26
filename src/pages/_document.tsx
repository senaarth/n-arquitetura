import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: "BankGothic Lt BT";
                  src: url("//db.onlinewebfonts.com/t/8058c5fac0f4c6d0d692921f5637319a.eot");
                  src: url("//db.onlinewebfonts.com/t/8058c5fac0f4c6d0d692921f5637319a.eot?#iefix")
                      format("embedded-opentype"),
                    url("//db.onlinewebfonts.com/t/8058c5fac0f4c6d0d692921f5637319a.woff2")
                      format("woff2"),
                    url("//db.onlinewebfonts.com/t/8058c5fac0f4c6d0d692921f5637319a.woff")
                      format("woff"),
                    url("//db.onlinewebfonts.com/t/8058c5fac0f4c6d0d692921f5637319a.ttf")
                      format("truetype"),
                    url("//db.onlinewebfonts.com/t/8058c5fac0f4c6d0d692921f5637319a.svg#BankGothic Lt BT")
                      format("svg");
                }
              `,
            }}
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
