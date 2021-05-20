import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

function Home() {
  const menuItems = [
    {
      title: "N!",
      isActive: false,
      route: "about",
      isLink: true,
      type: "text",
    },
    {
      title: "SOLUÇÕES",
      isActive: false,
      isLink: true,
      route: "solucoes",
      type: "text",
    },
    {
      title: "PROJETOS",
      isActive: false,
      isLink: true,
      route: "projetos",
      type: "text",
    },
    {
      title: "CLIPPING",
      isActive: false,
      isLink: true,
      route: "clipping",
      type: "text",
    },
    {
      title: "logo",
      isActive: false,
      isLink: false,
      type: "logo",
    },
    {
      title: "PARA INVESTIR",
      isActive: false,
      isLink: true,
      route: "invest",
      type: "text",
    },
    {
      title: "ÍNDICES ECONÔMICOS",
      isActive: false,
      isLink: true,
      route: "indices",
      type: "text",
    },
    {
      title: "PARCEIROS",
      isActive: false,
      isLink: true,
      route: "parceiros",
      type: "text",
    },
    {
      title: "CONTATO",
      isActive: false,
      isLink: true,
      route: "contato",
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Home | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={{
          mobileDescription:
            "PARA NAVEGAR EM NOSSA PÁGINA BASTA UTILIZAR O MENU PARA SELECIONAR O CONTEÚDO DE SEU INTERESSE, PODENDO TOCAR NA EXCLAMAÇÃO PARA RETORNAR AO INÍCIO.",
        }}
      />
    </>
  );
}

export default Home;
