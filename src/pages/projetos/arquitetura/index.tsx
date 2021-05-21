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
    mobileDescription:
      "NESTA PÁGINA VOCÊ PODE SELECIONAR UM PROJETO PARA VISUALIZAR, BASTA UM TOQUE.",
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
      path: "projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 101-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-bottom.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 102-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 103-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 104-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 105-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 106-100x55.png",
            "/static/images/projetos/arquitetura/csj/n-site-projetos-arquitetura-csj-imagem 107-100x55.png",
          ],
          hasVideo: true,
          videoSource:
            "/static/images/projetos/arquitetura/csj/video retrofit samonte.mp4",
          title: "PROJETO CSJ",
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
      path: "projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 108-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 101-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 102-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 103-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 104-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 105-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 106-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 107-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 108-100x55.png",
            "/static/images/projetos/arquitetura/adm/n-site-projetos-arquitetura-adm-imagem 109-100x55.png",
            "/static/images/projetos/arquitetura/adm/antes depois wcf.png",
            "/static/images/projetos/arquitetura/adm/antes depois wcm.png",
          ],
          title: "PROJETO ADM",
        },
      },
    },
    {
      title: "PROJETO FAT",
      isActive: false,
      isLink: true,
      path: "projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 101-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 101-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 102-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 103-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 104-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 105-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 106-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 107-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 108-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 109-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 110-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 111-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 112-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 113-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 114-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 115-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 116-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 117-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 118-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-imagem 119-100x55.png",
            "/static/images/projetos/arquitetura/fat/n-site-projetos-arquitetura-fat-bottom.png",
          ],
          title: "PROJETO FAT",
        },
      },
    },
    {
      title: "Projeto 120s",
      isActive: false,
      isLink: true,
      path: "projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 101-100x55.png",
      type: "project",
      content: {
        carouselProps: {
          slidesSources: [
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 101-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 102-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 103-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 104-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 105-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 106-100x55.png",
            "/static/images/projetos/arquitetura/120s/n-site-projetos-arquitetura-120s-imagem 107-100x55.png",
          ],
          title: "PROJETO 120s",
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
