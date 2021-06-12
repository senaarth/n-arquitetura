import React, { useState } from "react";
import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { GetStaticProps } from "next";

interface AboutProps {
  aboutContent: {
    missao: string;
    visao: string;
    valores: string;
  };
}

interface ContentProps {
  title?: string;
  description?: string;
}

export default function About({ aboutContent }: AboutProps) {
  const [contentProps, setContentProps] = useState({} as ContentProps);

  const titleGroup = (
    <>
      <li style={{ listStyle: "none" }}>MISSÃO</li>
      <li style={{ listStyle: "none" }}>VISÃO</li>
      <li style={{ listStyle: "none" }}>VALORES</li>
    </>
  );

  const menuItems = [
    {
      title: "N!",
      isActive: false,
      isLink: true,
      route: "about",
      type: "text",
    },
    {
      title: "",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "MISSÃO",
      isActive: false,
      isLink: true,
      type: "text",
      content: {
        title: "MISSÃO",
        description: aboutContent.missao,
      },
    },
    {
      title: titleGroup,
      isActive: true,
      isLink: true,
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
      title: "VISÃO",
      isActive: false,
      isLink: true,
      type: "text",
      content: {
        title: "VISÃO",
        description: aboutContent.visao,
      },
    },
    {
      title: "EQUIPE",
      isActive: false,
      isLink: true,
      route: "equipe",
      type: "text",
    },
    {
      title: "",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "VALORES",
      isActive: false,
      isLink: true,
      type: "text",
      content: {
        title: "VALORES",
        description: aboutContent.valores,
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Sobre | N!</title>
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

  const res = await prismic.query([
    Prismic.predicates.at("document.type", "about"),
  ]);

  const aboutContent = {
    missao: RichText.asHtml(res.results[0].data.missao),
    visao: RichText.asHtml(res.results[0].data.visao),
    valores: RichText.asHtml(res.results[0].data.valores),
  };

  return {
    props: {
      aboutContent,
    },
  };
};