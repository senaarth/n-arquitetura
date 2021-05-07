import { useState } from "react";
import Head from "next/head";
import { MainContainer } from "../../../components/MainContainer";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Habitacao() {
  const [contentProps, setContentProps] = useState({} as ContentProps);
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
      path: "projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 02-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 01-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 02-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 03-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 04-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 05-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 06-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 07-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 08-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 09-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 10-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 11-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 12-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 13-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 14-100x55.png",
            "/static/images/projetos/habitacao/rbr/n-site-projetos-arquitetura-rbr-imagem 15-100x55.png",
          ],
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
      path: "projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 01-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 01-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 02-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 03-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 04-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 05-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 06-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 07-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 08-100x55.png",
            "/static/images/projetos/habitacao/rdq/n-site-projetos-arquitetura-rdq-imagem 09-100x55.png",
          ],
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
