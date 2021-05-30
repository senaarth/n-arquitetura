import React, { useState } from "react";
import { MainContainer } from "../../../components/MainContainer";
import Head from "next/head";

export default function Urbanismo() {
  const [contentProps, setContentProps] = useState({
    mobileDescription:
      "NESTA PÁGINA VOCÊ PODE SELECIONAR UM PROJETO PARA VISUALIZAR, BASTA UM TOQUE.",
  });

  const menuItems = [
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "URBANISMO",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "PROJETOS",
      isActive: true,
      isLink: true,
      route: "projetos",
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
      route: "/projetos",
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
        <title>Urbanismo | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} contentProps={contentProps} />
    </>
  );
}
