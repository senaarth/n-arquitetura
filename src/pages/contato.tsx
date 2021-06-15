import React from "react";
import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { GetStaticProps } from "next";

type Social = {
  place: number;
  title: string;
  path: string;
};

type Location = {
  title: string;
  place: number;
  showLocation: number;
  locationData: {
    latitude: number;
    longitude: number;
  };
};

type FormBtn = {
  title: string;
  place: number;
};

interface ContatoProps {
  social: Social[];
  location: Location;
  formBtn: FormBtn;
}

export default function Contato({ social, location, formBtn }: ContatoProps) {
  const emptyMenu = [
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
      locationData: {
        longitude: 0,
        latitude: 0,
      },
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
      route: "/about",
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
      title: "CONTATO",
      isActive: true,
      isLink: false,
      type: "text",
    },
  ];

  let menuItems = emptyMenu;

  const socialContent = social.reduce((acc, item) => {
    return [
      ...acc,
      {
        title: item.title,
        isActive: false,
        isLink: true,
        route: item.path,
        type: "contact",
      },
    ];
  }, []);

  social.forEach((value, index) => {
    if (value.place !== 5 && value.place !== 9) {
      menuItems[value.place - 1] = socialContent[index];
    }
  });

  if (location.showLocation && location.place !== 9 && location.place !== 5) {
    menuItems[location.place - 1] = {
      title: location.title,
      isActive: false,
      isLink: false,
      type: "location",
      locationData: location.locationData,
    };
  }

  menuItems[formBtn.place - 1] = {
    title: formBtn.title,
    isActive: false,
    isLink: false,
    type: "contactForm",
  };

  return (
    <>
      <Head>
        <title>Contato | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} contentProps={{ hasForm: true }} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const res = await prismic.query([
    Prismic.predicates.at("document.type", "conta"),
  ]);

  const social = res.results[0].data.social.map((item) => {
    return {
      place: item.contact_place,
      title: RichText.asText(item.title),
      path: RichText.asText(item.link),
    };
  });

  social.sort(function (a, b) {
    if (a.place > b.place) {
      return 1;
    }
    if (a.place < b.place) {
      return -1;
    }
    return 0;
  });

  const location = {
    title: RichText.asHtml(res.results[0].data.location[0].title),
    place: res.results[0].data.location[0].place,
    showLocation: res.results[0].data.location[0].show_location ? 1 : 0,
    locationData: res.results[0].data.location[0].location_data,
  };

  const formBtn = {
    title: RichText.asHtml(res.results[0].data.form_btn[0].title),
    place: res.results[0].data.form_btn[0].place,
  };

  return {
    props: {
      social,
      location,
      formBtn,
    },
  };
};
