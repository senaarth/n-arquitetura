import { useState } from "react";
import Head from "next/head";
import { MainContainer } from "../../../components/MainContainer";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Container() {
  const [contentProps, setContentProps] = useState({} as ContentProps);

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
      path: "projetos/container/pir/n-site-projetos-container-pir-imagem 01-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 01-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 02-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 03-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 04-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 05-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 06-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 07-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 08-100x55.png",
            "/static/images/projetos/container/pir/n-site-projetos-container-pir-imagem 09-100x55.png",
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
