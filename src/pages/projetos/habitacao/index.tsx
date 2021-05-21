import { useState } from "react";
import Head from "next/head";
import { MainContainer } from "../../../components/MainContainer";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mobileDescription?: string;
}

export default function Habitacao() {
  const [contentProps, setContentProps] = useState({
    mobileDescription: "NESTA PÁGINA VOCÊ PODE SELECIONAR UM PROJETO PARA VISUALIZAR, BASTA UM TOQUE."
  });

  const habitacaoPopular = (
    <>
      <li style={{listStyle: "none"}}>HABITAÇÃO</li>
      <li style={{listStyle: "none"}}>POPULAR</li>
    </>
  );

  const menuItems = [
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "Projeto RBR",
      isActive: false,
      isLink: true,
      path: "projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-bottom.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 101-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 102-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 103-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 104-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 105-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 106-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 107-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 108-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 109-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-bottom.png",
          ],
          title: "PROJETO RBR"
        },
      },
    },
    {
      title: "PROJETOS",
      isActive: true,
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
      title: "logo",
      isActive: false,
      isLink: true,
      route: "/projetos",
      type: "logo",
    },
    {
      title: "Projeto RD1",
      isActive: false,
      isLink: true,
      path: "projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-bottom.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 101-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 102-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 103-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 104-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 105-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 106-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 107-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 108-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 109-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 109-100x55.png",
          ],
          title: "PROJETO RD1"
        },
      },
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
      isLink: false,
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
        contentProps={contentProps}
        setContentProps={setContentProps}
      />
    </>
  );
}
