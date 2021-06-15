import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import React, { useState } from "react";
import { GetStaticProps } from "next";
import getPrismicClient from "../services/prismic";
import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";

type Variedade = {
  place: number;
  title: string;
  contentTitle: string;
  description: string;
};

interface VariedadesProps {
  variedades: Variedade[];
}

interface ContentProps {
  title?: string;
  description?: string;
}

export default function Variedades({ variedades }: VariedadesProps) {
  const [contentProps, setContentProps] = useState({} as ContentProps);

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
      title: "VARIEDADES",
      isActive: true,
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


  const variedadesContent = variedades.reduce((acc, item) => {


    return [
      ...acc,
      {
        title: item.title,
        isActive: false,
        isLink: false,
        type: "mobile",
        content: {
          title: item.contentTitle,
          description: item.description,
        },
      },
    ];
  }, []);

  let menuItems = emptyMenu;

  variedades.forEach((value, index) => {
    if (value.place !== 4 && value.place !== 5) {
      menuItems[value.place - 1] = variedadesContent[index];
    }
  });

  return (
    <>
      <Head>
        <title>Clipping | N!</title>
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
    [Prismic.predicates.at("document.type", "variedades")],
    {
      pageSize: 7,
    }
  );

  const variedades = res.results.map((post) => {
    return {
      place: post.data.place,
      title: RichText.asText(post.data.title),
      contentTitle: RichText.asText(post.data.content_title),
      description: RichText.asHtml(post.data.description),
    };
  });

  variedades.sort(function (a, b) {
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
      variedades,
    },
  };
};
