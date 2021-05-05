import { MainContainer } from "../../../components/MainContainer";
import Head from "next/head";

export default function Habitacao() {
  const habitacaoPopular = (
    <>
      <li>HABITAÇÃO</li>
      <li>POPULAR</li>
    </>
  );

  const menuItems = [
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "ISSO SERÁ UMA IMAGEMS",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "PROJETOS",
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
      title: "logo",
      isActive: false,
      isLink: true,
      route: "/projetos",
      type: "logo",
    },
    {
      title: "ISSO SERÁ UMA IMAGEM",
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
      title: habitacaoPopular,
      isActive: false,
      isLink: true,
      route: "projetos/habitacao",
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Projetos | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} />
    </>
  );
}
