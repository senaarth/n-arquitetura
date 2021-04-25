import { MainContainer } from "../components/MainContainer";

export default function About() {
  const content = {
    title: "N!",
    description:
      "A N! Arquitetura Gestão e Negócios é uma equipe multidisciplinar de gestão de negócios em Brasília-DF. O foco da nossa empresa é subsidiar tecnicamente a tomada de decisões no cenário imobiliário, assim como promover a gestão dos principais vetores envolvidos, sejam eles proprietários de terrenos, projetistas, construtoras, empreiteros, investidores, operações de crédito e gestão de carreira.",
  };

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
      title: "MISSÃO VISÃO E VALORES",
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

  return <MainContainer menuItems={menuItems} contentProps={content} />;
}
