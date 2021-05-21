import { useState } from "react";
import Head from "next/head";
import { MainContainer } from "../../../components/MainContainer";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mobileDescription?: string;
}

export default function Container() {
  const [contentProps, setContentProps] = useState({
    mobileDescription: "NESTA PÁGINA VOCÊ PODE SELECIONAR UM PROJETO PARA VISUALIZAR, BASTA UM TOQUE."
  });

  const menuItems = [
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "Projeto PIR",
      isActive: false,
      isLink: true,
      path: "projetos/container/pir/n-site-projetos-container-pir-imagem 108-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 101-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 102-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 103-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 104-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 105-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 106-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 107-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 108-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 109-100x55.png",
          ],
          title: "PROJETO PIR"
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
      title: "CONTAINER",
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
      title: "",
      isActive: false,
      isLink: false,
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
