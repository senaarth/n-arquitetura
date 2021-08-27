import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import React, { useState } from "react";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";

type Slide = {
  src: string;
  hasZoom: boolean;
  centerImg: string;
  hasLink: boolean;
  link: string;
  hasPdf: boolean;
  pdfSrc: string;
  pdfBackground: string;
}

interface HomeProps {
  slides: Slide[];
}


function Home({ slides }: HomeProps) {

  const menuItems = [
    {
      title: "N!",
      isActive: false,
      route: "about",
      isLink: true,
      type: "text",
    },
    {
      title: "SOLUÇÕES",
      isActive: false,
      isLink: true,
      route: "solucoes",
      type: "text",
    },
    {
      title: "PROJETOS",
      isActive: false,
      isLink: true,
      route: "projetos",
      type: "text",
    },
    {
      title: "VARIEDADES",
      isActive: false,
      isLink: true,
      type: "text",
      route: "variedades"
    },
    {
      title: "logo",
      isActive: false,
      isLink: false,
      type: "logo",
    },
    {
      title: "PARA INVESTIR",
      isActive: false,
      isLink: true,
      route: "invest",
      type: "text",
    },
    {
      title: "<li>CALCULADORA</li><li>FINANCEIRA</li>",
      isActive: false,
      isLink: true,
      route: "calculadora",
      type: "text",
    },
    {
      title: "PARCEIROS",
      isActive: false,
      isLink: true,
      route: "parceiros",
      type: "text",
    },
    {
      title: "CONTATO",
      isActive: false,
      isLink: true,
      route: "contato",
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Home | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={{
          isHome: true,
          slides,
          mobileDescription:
            "PARA NAVEGAR EM NOSSA PÁGINA BASTA SELECIONAR O CONTEÚDO DESEJADO, UTILIZANDO A EXCLAMAÇÃO PARA RETORNAR À HOME SE NECESSÁRIO.",
        }}
      />
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const res = await prismic.query(
    [Prismic.predicates.at("document.type", "home")]
  );

  const slides = res.results[0].data.slides.map(item => {
    return {
      src: item.slide_src?.url ? item.slide_src.url : null,
      hasZoom: item.has_zoom,
      centerImg: item.has_zoom ? item.center_img.url : null,
      hasLink: item.has_link,
      link: item.has_link ? item.link.url : null,
      hasPdf: item.has_pdf,
      pdfSrc:  item.has_pdf ? item.pdf_src?.url : null,
    };
  });

  return {
    props: {
      slides,
    },
  };
};
