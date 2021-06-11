import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import { GetStaticProps } from "next";
import getPrismicClient from "../services/prismic";
import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";
import { useState } from "react";

type Integrante = {
  place: number;
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
};

interface EquipeProps {
  integrantes: Integrante[];
}

export default function Equipe({ integrantes }: EquipeProps) {
  const [contentProps, setContentProps] = useState({
    mobileDescription:
      "VOCÊ ESTÁ EM NOSSA PÁGINA DE EQUIPE, ESCOLHA UM INTEGRANTE PARA VER SUA DESCRIÇÃO",
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
      title: "EQUIPE",
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
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
  ];


  const integrantesContent = integrantes.reduce((acc, item) => {
    return [
      ...acc,
      {
        title: item.title,
        isActive: false,
        isLink: true,
        path: item.imgUrl,
        type: "teamMember",
        content: {
          title: item.title,
          subtitle: item.subtitle,
          description: item.description,
        },
      },
    ];
  }, []);

  let menuItems = emptyMenu;

  integrantes.forEach((value, index) => {
    if (value.place !== 5 && value.place !== 7) {
      menuItems[value.place - 1] = integrantesContent[index];
    }
  });

  return (
    <>
      <Head>
        <title>Equipe | N!</title>
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
    [Prismic.predicates.at("document.type", "integrante")],
    {
      pageSize: 7,
    }
  );

  const integrantes = res.results.map((post) => {
    return {
      place: post.data.place,
      title: RichText.asText(post.data.title),
      subtitle: RichText.asText(post.data.subtitle),
      description: RichText.asHtml(post.data.description),
      imgUrl: post.data.img.url,
    };
  });

  integrantes.sort(function (a, b) {
    if (a.place > b.place) {
      return 1;
    }
    if (a.place < b.place) {
      return -1;
    }
    return 0;
  });

  return {
    props: {
      integrantes,
    },
  };
};
