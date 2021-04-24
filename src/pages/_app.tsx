import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { MobileHeader } from "../components/MobileHeader";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MobileHeader />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
