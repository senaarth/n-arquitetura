import { useState } from "react";
import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

interface ContentProps {
  title?: string;
  description?: string;
}

export default function About() {
  const [contentProps, setContentProps] = useState({} as ContentProps);

  const valores = (
    <>
      <li style={{ marginBottom: "1rem" }}>AGILIDADE COMO ESTRATÉGIA;</li>
      <li style={{ marginBottom: "1rem" }}>TRANSPARÊNCIA COMO SEGURANÇA;</li>
      <li style={{ marginBottom: "1rem" }}>EQUILÍBRIO COMO FORÇA;</li>
      <li style={{ marginBottom: "1rem" }}>
        SUSTENTABILIDADE AGREGANDO VALOR;
      </li>
      <li style={{ marginBottom: "1rem" }}>NEGÓCIOS PRIORIZANDO PESSOAS;</li>
    </>
  );

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
      isActive: false,
      isLink: true,
      route: "about",
      type: "text",
    },
    {
      title: "",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "MISSÃO",
      isActive: false,
      isLink: true,
      type: "text",
      content: {
        title: "MISSÃO",
        description:
          "APLICAR A ARQUITETURA E O URBANISMO APOIADOS EM UMA VISÃO MULTIDISCIPLINAR VALORIZANDO ATIVOS IMOBILIÁRIOS E PROMOVENDO GANHOS E CRESCIMENTO PATRIMONIAL AOS NOSSO CLIENTES.",
      },
    },
    {
      title: titleGroup,
      isActive: true,
      isLink: true,
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
      title: "VISÃO",
      isActive: false,
      isLink: false,
      type: "text",
      content: {
        title: "VISÃO",
        description:
          "SE POSICIONAR COMO CONSULTORIA REFERÊNCIA EM PROJETOS IMOBILIÁRIOS.",
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
      title: "",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "VALORES",
      isActive: false,
      isLink: false,
      type: "text",
      content: {
        title: "valores",
        description: valores,
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Sobre | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={contentProps}
        setContentProps={setContentProps}
      />
    </>
  );
}
