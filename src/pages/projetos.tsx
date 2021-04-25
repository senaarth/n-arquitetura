import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

export default function Projetos() {
  const menuItems = [
    {
      title: "URBANISMO",
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
        <title>Projetos | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} />
    </>
  );
}
