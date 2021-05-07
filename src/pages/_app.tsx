import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "../components/Header";
import { MobileHeader } from "../components/MobileHeader";
import { Footer } from "../components/Footer";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MobileHeader />
      <Header />
      <Component {...pageProps} />
      <Footer financeKey={"5a1951fa"} />
    </>
  );
}

export default MyApp;
