import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { GetStaticProps } from "next";
import { useState } from "react";

type FilesSources = {
  fileSource: string;
  backgroundSource: string;
}

type InvestItem = {
  place: number;
  menuTitle: string;
  carouselTitle: string;
  hasVideo: boolean;
  hasFile: boolean;
  videoSource: boolean;
  videoPreview: string;
  fileSources: FilesSources[];
  slidesSources: string[];
}

interface InvestProps {
  investItems: InvestItem[];
}

export default function Invest({ investItems }: InvestProps) {
  const [content, setContent] = useState({});

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
      title: "PARA INVESTIR",
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
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
  ];

  const investContent = investItems.reduce((acc, item) => {
    return [
      ...acc,
      {
        title: item.menuTitle,
        isActive: false,
        isLink: true,
        type: "mobile",
        content: {
          carouselProps: {
            hasVideo: item.hasVideo,
            hasFile: item.hasFile,
            fileSources: item.fileSources,
            videoSource: item.videoSource,
            videoPreview: item.videoPreview,
            slidesSources: item.slidesSources,
            title: item.carouselTitle,
          }
        },
      },
    ];
  }, []);

  let menuItems = emptyMenu;

  investItems.forEach((value, index) => {
    if (value.place !== 5 && value.place !== 6) {
      menuItems[value.place - 1] = investContent[index];
    }
  });

  return (
    <>
      <Head>
        <title>Para Investir | N!</title>
      </Head>
      <MainContainer 
        menuItems={menuItems} 
        contentProps={content}
        setContentProps={setContent}  
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const res = await prismic.query(
    [Prismic.predicates.at("document.type", "invest")],
    {
      pageSize: 7,
    }
  );

  const investItems = res.results.map((item) => {
    let pdfData = [];

    let imagesSources = item.data.carousel_slides.reduce((acc, item) => {
      if (!item.slide.url) {
        return acc;
      }

      return [
        ...acc,
        item.slide?.url
      ]
    }, []);

    if (item.data.has_pdf) {
      pdfData = item.data.pdf_array.reduce((acc, item) => {
        return [
          ...acc,
          {
            fileSource: item.pdf_source.url,
            backgroundSource: item.pdf_background.url,
          }
        ];
      }, []);
    }

    return {
      place: item.data.place,
      menuTitle: RichText.asText(item.data.title),
      carouselTitle: item.data.carousel_title ? RichText.asText(item.data.carousel_title) : "",
      hasVideo: item.data.has_video,
      hasFile: item.data.has_pdf,
      videoSource: item.data.video?.url ?? "",
      videoPreview: item.data.video_background?.url ?? "",
      fileSources: pdfData,
      slidesSources: imagesSources,
    };
  });

  return {
    props: {
      investItems,
    },
  };
};
