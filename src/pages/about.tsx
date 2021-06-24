import React, { useState } from "react";
import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import getPrismicClient from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { GetStaticProps } from "next";

interface AboutProps {
  aboutContent: {
    description: string;
    mobileDescription: string;
    modalContent: string;
  };
}

export default function About({ aboutContent }: AboutProps) {
  const content = {
    title: "N!",
    description: aboutContent.description,
    mobileDescription: aboutContent.mobileDescription,
  };

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
      title: titleGroup,
      isActive: false,
      isLink: true,
      route: "valores",
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
      title: "EQUIPE",
      isActive: false,
      isLink: true,
      route: "equipe",
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

  const mobileMenuItems = [
    {
      title: "N!",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "A EMPRESA",
      isActive: false,
      isLink: false,
      type: "mobile",
      content,
    },
    {
      title: titleGroup,
      isActive: false,
      isLink: false,
      type: "mobile",
      content: {
        description: aboutContent.modalContent,
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

  return (
    <>
      <Head>
        <title>Sobre | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={content}
        mobileMenuItems={mobileMenuItems}
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
    description: RichText.asHtml(res.results[0].data.about),
    mobileDescription: RichText.asHtml(res.results[0].data.mobile_description),
    modalContent: RichText.asHtml(res.results[0].data.modal_content),
  };

  return {
    props: {
      aboutContent,
    },
  };
};
