import { MainContainer } from "../../components/MainContainer";
import Head from "next/head";

export default function Projetos() {
  const habitacaoPopular = (
    <>
      <li style={{ listStyle: "none" }}>HABITAÇÃO</li>
      <li style={{ listStyle: "none" }}>POPULAR</li>
    </>
  );

  const menuItems = [
    {
      title: "ARQUITETURA",
      isActive: false,
      isLink: true,
      route: "projetos/arquitetura",
      type: "text",
    },
    {
      title: "URBANISMO",
      isActive: false,
      isLink: true,
      route: "projetos/urbanismo",
      type: "text",
    },
    {
      title: "PROJETOS",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "CONTAINER",
      isActive: false,
      isLink: true,
      route: "projetos/container",
      type: "text",
    },
    {
      title: "logo",
      isActive: false,
      isLink: true,
      route: "/",
      type: "logo",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: habitacaoPopular,
      isActive: false,
      isLink: true,
      route: "projetos/habitacao",
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Projetos | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={{
          mobileDescription:
            "VOCÊ ESTÁ EM NOSSA PÁGINA DE PROJETOS, SELECIONE UMA CATEGORIA PARA VISUALIZAR NOSSO PORTFÓLIO.",
        }}
      />
    </>
  );
}
