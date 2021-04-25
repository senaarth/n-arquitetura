import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

export default function About() {
  const content = {
    title: "N!",
    description:
      "A N! Arquitetura Gestão e Negócios é uma equipe multidisciplinar de gestão de negócios em Brasília-DF. O foco da nossa empresa é subsidiar tecnicamente a tomada de decisões no cenário imobiliário, assim como promover a gestão dos principais vetores envolvidos, sejam eles proprietários de terrenos, projetistas, construtoras, empreiteros, investidores, operações de crédito e gestão de carreira.",
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

  return (
    <>
      <Head>
        <title>Sobre | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} contentProps={content} />
    </>
  );
}
