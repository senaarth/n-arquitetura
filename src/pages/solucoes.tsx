import React, { useState } from "react";
import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { GetStaticProps } from "next";

type Solucao = {
  title: string;
  menuTitle: string;
  content: string;
};

interface SolucoesProps {
  solucoes: Solucao[];
}

interface ContentProps {
  title?: string;
  description?: string;
}

export default function Solucoes({ solucoes }: SolucoesProps) {
  const [contentProps, setContentProps] = useState({} as ContentProps);

  const emptyMenu = [
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "SOLUÇÕES",
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
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
  ];

  const solucoesContent = solucoes.reduce((acc, item) => {
    return [
      ...acc,
      {
        title: <div dangerouslySetInnerHTML={{ __html: item.menuTitle }} />,
        isActive: false,
        isLink: true,
        type: "mobile",
        content: {
          title: item.title,
          description: item.content,
        },
      },
    ];
  }, []);

  const menuItems = emptyMenu.reduce((acc, item, index) => {
    if (index === 0 && solucoesContent[0]) {
      return [...acc, solucoesContent[0]];
    }
    if (index > 1 && index < 4 && solucoesContent[index - 1]) {
      return [...acc, solucoesContent[index - 1]];
    }
    if (index > 4 && solucoesContent[index - 2]) {
      return [...acc, solucoesContent[index - 2]];
    }
    return [...acc, item];
  }, []);

  return (
    <>
      <Head>
        <title>Soluções | N!</title>
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
    [Prismic.predicates.at("document.type", "solucoes")],
    {
      pageSize: 7,
    }
  );

  const solucoes = res.results.map((post) => {
    return {
      place: post.data.place,
      title: RichText.asText(post.data.title),
      menuTitle: RichText.asHtml(post.data.menu_title),
      content: RichText.asHtml(post.data.content),
    };
  });

  solucoes.sort(function (a, b) {
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
      solucoes,
    },
  };
};
