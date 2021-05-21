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
      <li style={{ marginBottom: "1rem" }}>Agilidade como estratégia;</li>
      <li style={{ marginBottom: "1rem" }}>Transparência como segurança;</li>
      <li style={{ marginBottom: "1rem" }}>Equilíbrio como força;</li>
      <li style={{ marginBottom: "1rem" }}>
        Sustentabilidade agregando valor;
      </li>
      <li style={{ marginBottom: "1rem" }}>Negócios priorizando pessoas;</li>
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
          "Aplicar a arquitetura e o urbanismo apoiados em uma visão multidisciplinar valorizando ativos imobiliários e promovendo ganhos e crescimento patrimonial aos nosso clientes.",
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
      isLink: true,
      type: "text",
      content: {
        title: "VISÃO",
        description:
          "Se posicionar como consultoria referência em projetos imobiliários.",
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
      isLink: true,
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
