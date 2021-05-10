import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

export default function About() {
  const content = {
    title: "N!",
    description:
      "A N! ARQUITETURA GESTÃO E NEGÓCIOS É UMA EQUIPE MULTIDISCIPLINAR DE GESTÃO DE NEGÓCIOS EM BRASÍLIA - DF. O FOCO DA NOSSA EMPRESA É SUBSIDIAR TECNICAMENTE A TOMADA DE DECISÕES NO CENÁRIO IMOBILIÁRIO, ASSIM COMO PROMOVER A GESTÃO DOS PRINCIPAIS VETORES ENVOLVIDOS, SEJAM ELES PROPRIETÁRIOS DE TERRENOS, PROJETISTAS, CONSTRUTORAS, EMPREITEIROS, INVESTIDORES, OPERAÇÕES DE CRÉDITO E GESTÃO DE CARTEIRA.",
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
