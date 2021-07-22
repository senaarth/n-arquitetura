import React, { useState } from "react";
import { MainContainer } from "../../../components/MainContainer";
import Head from "next/head";
import getPrismicClient from "../../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { GetStaticProps } from "next";

type Project = {
  place: number;
  title: string;
  hasVideo: boolean;
  videoSource: string;
  buttonImg: string;
  slidesSources: string[];
  videoPreview: string;
};

interface HabitacaoProps {
  projetos: Project[];
}

export default function Habitacao({ projetos }: HabitacaoProps) {
  const [contentProps, setContentProps] = useState({
    mobileDescription:
      "NESTA PÁGINA VOCÊ PODE SELECIONAR UM PROJETO PARA VISUALIZAR, BASTA UM TOQUE.",
  });

  const emptyMenu = [
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
      title: "PROJETOS",
      isActive: true,
      isLink: true,
      route: "projetos",
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
      route: "/about",
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
      title: `<li>HABITAÇÃO</li><li>POPULAR</li>`,
      isActive: false,
      isLink: false,
      type: "text",
    },
  ];

  let menuItems = emptyMenu;

  const projetosContent = projetos.reduce((acc, item) => {
    return [
      ...acc,
      {
        title: item.title,
        isActive: false,
        isLink: true,
        path: item.buttonImg,
        type: "project",
        content: {
          carouselProps: {
            slidesSources: item.slidesSources,
            hasVideo: item.hasVideo,
            videoSource: item.videoSource,
            videoPreview: item.videoPreview,
            title: item.title,
          },
        },
      },
    ];
  }, []);

  projetos.forEach((value, index) => {
    if (value.place !== 5 && value.place !== 3 && value.place !== 9) {
      menuItems[value.place - 1] = projetosContent[index];
    }
  });

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const res = await prismic.query(
    [Prismic.predicates.at("document.type", "projeto")]
  );

  const projectsResults = res.results.filter(
    (item) => item.data.categoria === "HABITACAO POPULAR"
  );

  const projetos = projectsResults.reduce((acc, item) => {
    return [
      ...acc,
      {
        place: item.data.ordenacao,
        title: RichText.asText(item.data.title),
        hasVideo: item.data.has_video,
        videoSource: item.data.video?.url ?? "",
        buttonImg: item.data.btn_img?.url ?? "",
        videoPreview: item.data.video_preview?.url ?? "",
        slidesSources: item.data.body[0].items,
      },
    ];
  }, []);

  projetos.forEach((item) => {
    if (item.slidesSources) {
      item.slidesSources = item.slidesSources.reduce((acc, item) => {
        return [...acc, item.image.url];
      }, []);
    }
  });

  return {
    props: {
      projetos,
    },
  };
};
