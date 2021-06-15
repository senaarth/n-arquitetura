import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "../components/Header";
import { MobileHeader } from "../components/MobileHeader";
import { Footer } from "../components/Footer";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  if (!process.env.NEXT_PUBLIC_IS_DEVELOPMENT) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src="/static/images/exclamacao.png"
          style={{
            width: "70%",
            maxWidth: "360px",
            marginTop: "auto",
          }}
        />
        <p
          style={{
            marginBottom: "auto",
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "1.675rem",
            maxWidth: "90%"
          }}
        >
          OBRIGADO POR NOS VISITAR!<br/><br/>ESTAMOS FINALIZANDO UM CONTEÚDO BEM LEGAL
          PARA VOCÊ.<br/><br/>NOS ENCONTRAMOS AQUI NOVAMENTE NO DIA 05/07.
        </p>
      </div>
    );
  }

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
