import { useState } from "react";
import Head from "next/head";
import { MainContainer } from "../../../components/MainContainer";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mobileDescription?: string;
}

export default function Arquitetura() {
  const [contentProps, setContentProps] = useState({
    mobileDescription: "NESTA PÁGINA VOCÊ PODE SELECIONAR UM PROJETO PARA VISUALIZAR, BASTA UM TOQUE."
  });

  const menuItems = [
    {
      title: "ARQUITETURA",
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
      title: "PROJETOS",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "PROJETO CSJ",
      isActive: false,
      isLink: true,
      path: "projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 01-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 01-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 02-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 03-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 04-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 05-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 06-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 07-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 08-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 09-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 10-100x55.png",
          ],
          hasVideo: true,
          videoSource: "/static/images/projetos/arquitetura/csj/video retrofit samonte.mp4",
          title: "PROJETO CSJ"
        },
      },
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
      title: "PROJETO ADM",
      isActive: false,
      isLink: true,
      path: "projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 23-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 01-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 02-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 03-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 04-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 05-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 06-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 07-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 08-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 09-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 10-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 11-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 12-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 13-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 14-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 15-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 16-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 17-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 18-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 19-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 20-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 21-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 22-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 23-100x55.png",
          ],
          title: "PROJETO ADM"
        },
      },
    },
    {
      title: "PROJETO FAT",
      isActive: false,
      isLink: true,
      path: "projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 01-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 01-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 02-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 03-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 04-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 05-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 06-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 07-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 08-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 09-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 10-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 11-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 12-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 13-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 14-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 15-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 16-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 17-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 18-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 19-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 20-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 21-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 22-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 23-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 24-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 25-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 26-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 27-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 28-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 29-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 30-100x55.png",
          ],
          title: "PROJETO FAT"
        },
      },
    },
    {
      title: "Projeto 120s",
      isActive: false,
      isLink: true,
      path: "projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 01-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 01-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 02-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 03-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 04-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 05-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 06-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 07-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 08-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 09-100x55.png",
          ],
          title: "PROJETO 120s"
        },
      },
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
