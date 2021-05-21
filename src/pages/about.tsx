import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

export default function About() {
  const content = {
    title: "N!",
    description:
      "A N! Arquitetura gestão e negócios é uma equipe multidisciplinar de gestão de negócios em Brasília - DF. O foco da nossa empresa é subsidiar tecnicamente a tomada de decisões no cenário imobiliário, assim como promover a gestão dos principais vetores envolvidos, sejam eles proprietários de terrenos, projetistas, construtoras, empreiteiros, investidores, operações de crédito e gestão de carteira.",
    mobileDescription:
      "VOCÊ ESTÁ EM NOSSA PÁGINA DE SOBRE, SELECIONE UM DOS ITENS DO MENU PARA VISUALIZAR SEU CONTEÚDO OU NA EXCLAMAÇÃO CENTRAL PARA RETORNAR A PÁGINA ANTERIOR.",
  };

  const titleGroup = (
    <>
      <li style={{ listStyle: "none" }}>MISSÃO</li>
      <li style={{ listStyle: "none" }}>VISÃO</li>
      <li style={{ listStyle: "none" }}>VALORES</li>
    </>
  );

  const missao = (
    <>
      <h1 style={{ fontSize: "1.1rem" }}>MISSÃO</h1>
      <p style={{ fontSize: "0.9rem" }}>
        APLICAR A ARQUITETURA E O URBANISMO APOIADOS EM UMA VISÃO
        MULTIDISCIPLINAR VALORIZANDO ATIVOS IMOBILIÁRIOS E PROMOVENDO GANHOS E
        CRESCIMENTO PATRIMONIAL AOS NOSSO CLIENTES.
      </p>
      <h1 style={{ fontSize: "1.1rem", marginTop: "1rem" }}>VISÃO</h1>
      <p style={{ fontSize: "0.9rem" }}>
        SE POSICIONAR COMO CONSULTORIA REFERÊNCIA EM PROJETOS IMOBILIÁRIOS.
      </p>
      <h1 style={{ fontSize: "1.1rem", marginTop: "1rem" }}>VALORES</h1>
      <>
        <li style={{ fontSize: "0.9rem" }}>AGILIDADE COMO ESTRATÉGIA;</li>
        <li style={{ fontSize: "0.9rem" }}>TRANSPARÊNCIA COMO SEGURANÇA;</li>
        <li style={{ fontSize: "0.9rem" }}>EQUILÍBRIO COMO FORÇA;</li>
        <li style={{ fontSize: "0.9rem" }}>
          SUSTENTABILIDADE AGREGANDO VALOR;
        </li>
        <li style={{ fontSize: "0.9rem" }}>NEGÓCIOS PRIORIZANDO PESSOAS;</li>
      </>
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
        title: "MISSÃO, VISÃO E VALORES",
        description: missao,
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
