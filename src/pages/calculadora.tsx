import { GetStaticProps } from "next";
import Head from "next/head";
import { MainContainer } from "../components/MainContainer";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";

export default function Calculadora() {
  const title = (
    <h1 style={{ textAlign: "center", fontSize: "1.6rem" }}>FUNCIONALIDADE EM DESENVOLVIMENTO</h1>
  );

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
      <MainContainer menuItems={menuItems} contentProps={{ title, mobileDescription: title }}/>
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
