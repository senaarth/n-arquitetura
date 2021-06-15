import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import { GetStaticProps } from "next";
import getPrismicClient from "../services/prismic";
import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";

type Parceiro = {
  place: number;
  title: string;
  imgUrl: string;
};

interface ParceirosProps {
  parceiros: Parceiro[];
}

export default function Parceiros({ parceiros }: ParceirosProps) {
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

  const parceirosContent = parceiros.reduce((acc, item) => {
    return [
      ...acc,
      {
        title: item.title,
        isActive: false,
        isLink: false,
        path: item.imgUrl,
        type: "imageContainer",
      },
    ];
  }, []);

  let menuItems = emptyMenu;

  parceiros.forEach((value, index) => {
    if (value.place !== 5 && value.place !== 8) {
      menuItems[value.place - 1] = parceirosContent[index];
    }
  });

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
      imgUrl: post.data.logo.url,
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
