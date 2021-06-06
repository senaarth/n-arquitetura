import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer />
      <Footer />
    </>
  );
}

export default MyApp;
