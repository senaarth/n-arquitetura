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
        Aplicar a arquitetura e o urbanismo apoiados em uma visão
        multidisciplinar valorizando ativos imobiliários e promovendo ganhos e
        crescimento patrimonial aos nosso clientes.
      </p>
      <h1 style={{ fontSize: "1.1rem", marginTop: "1rem" }}>VISÃO</h1>
      <p style={{ fontSize: "0.9rem" }}>
        Se posicionar como consultoria referência em projetos imobiliários.
      </p>
      <h1 style={{ fontSize: "1.1rem", marginTop: "1rem" }}>VALORES</h1>
      <>
        <li style={{ fontSize: "0.9rem" }}>Agilidade como estratégia;</li>
        <li style={{ fontSize: "0.9rem" }}>Transparência como segurança;</li>
        <li style={{ fontSize: "0.9rem" }}>Equilíbrio como força;</li>
        <li style={{ fontSize: "0.9rem" }}>
          Sustentabilidade agregando valor;
        </li>
        <li style={{ fontSize: "0.9rem" }}>Negócios priorizando pessoas;</li>
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
