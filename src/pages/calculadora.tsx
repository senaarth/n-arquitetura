import { GetStaticProps } from "next";
import Head from "next/head";
import { MainContainer } from "../components/MainContainer";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

export default function Calculadora() {
  const menuItems = [
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
      title: "<li>CALCULADORA</li><li>FINANCEIRA</li>",
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

  return (
    <>
      <Head>
        <title>Índices | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} contentProps={{ title: "FUNCIONALIDADE EM DESENVOLVIMENTO"}}/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient();

  const res = await prismic.query([
    Prismic.predicates.at("document.type", "indices"),
  ]);

  return {
    props: {},
  };
};
