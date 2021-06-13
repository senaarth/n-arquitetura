import { GetStaticProps } from "next";
import Head from "next/head";
import { MainContainer } from "../components/MainContainer";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import {
  getBtc,
  getDollar,
  getEth,
  getEuro,
  getSelic,
} from "../services/getCurrencies";

type IndiceItem = {
  place: number;
  content: string;
};

interface IndicesProps {
  indicesItems: IndiceItem[];
}

export default function Indices({ indicesItems }: IndicesProps) {
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
      title: "ÍNDICES ECONÔMICOS",
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


  const formattedItems = indicesItems.reduce((acc, item) => {
    return [
      ...acc,
      {
        title: item.content,
        isActive: false,
        isLink: false,
        type: "text",
      },
    ];
  }, []);

  let menuItems = emptyMenu;

  indicesItems.forEach((value, index) => {
    if (value.place !== 5 && value.place !== 7) {
      menuItems[value.place - 1] = formattedItems[index];
    }
  });

  return (
    <>
      <Head>
        <title>Índices | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const USD = await getDollar();
  const EUR = await getEuro();
  const BTC = await getBtc();
  const ETH = await getEth();
  const SELIC = await getSelic();

  const prismic = getPrismicClient();

  const res = await prismic.query([
    Prismic.predicates.at("document.type", "indices"),
  ]);

  const currencies = `<ul><li>USD: ${USD}</li><li>EUR: ${EUR}</li><li>BTC: ${BTC}k</li><li>ETH: ${ETH}k</li></ul>`;

  const currenciesItem = {
    place: res.results[0].data.currencies_place,
    content: currencies,
  };

  const indicesItem = {
    place: res.results[0].data.indicadores[0].group_place,
    content: `${RichText.asHtml(
      res.results[0].data.indicadores[0].values
    )}<li>SELIC: ${SELIC}</li>`,
  };

  const cubItem = {
    place: res.results[0].data.grupo_cub[0].group_place,
    content: RichText.asHtml(res.results[0].data.grupo_cub[0].indices),
  };

  return {
    props: {
      indicesItems: [cubItem, currenciesItem, indicesItem],
    },
  };
};
