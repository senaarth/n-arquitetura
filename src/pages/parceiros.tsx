import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import { GetStaticProps } from "next";
import getPrismicClient from "../services/prismic";
import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";

export default function Parceiros() {
  const menuItems = [
    {
      title: "",
      isActive: false,
      isLink: false,
      path: "katai_logo.png",
      type: "imageContainer",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      path: "imo-logo.jpg",
      type: "imageContainer",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      path: "cima_logo.png",
      type: "imageContainer",
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
      path: "allsix_logo.png",
      type: "imageContainer",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "PARCEIROS",
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
  ];

  return (
    <>
      <Head>
        <title>Parceiros | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const res = await prismic.query(
    [Prismic.predicates.at("document.type", "parceiros")],
    {
      pageSize: 7,
    }
  );

  const parceiros = res.results.map((post) => {
    return {
      place: post.data.place,
      title: RichText.asText(post.data.title),
      imgUrl: post.data.logo.url
    };
  });

  parceiros.sort(function (a, b) {
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
      parceiros,
    },
  };
};
