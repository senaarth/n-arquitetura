import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { MobileHeader } from "../components/MobileHeader";
import { Footer } from "../components/Footer";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <MobileHeader />
      <Header />
      <Component {...pageProps} />
      <Footer /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src="/images/exclamacao.png"
          style={{ width: "50%", maxWidth: "700px", marginTop: "auto" }}
        />
        <br/>
        <strong style={{ textAlign: "center", width: "80%", fontSize: 30, marginBottom: "auto" }}>
          OBRIGADO POR NOS VISITAR!<br/><br/>ESTAMOS FINALIZANDO UM CONTEÚDO BEM LEGAL PARA VOCÊ,<br/><br/>NOS ENCONTRAMOS AQUI NOVAMENTE NO DIA 05/07.
        </strong>
      </div>
    </>
  );
}

export default MyApp;
