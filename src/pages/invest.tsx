import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

export default function Invest() {
  const titleGroup = (
    <>
      <li style={{ listStyle: "none" }}>DIVINÓPOLIS</li>
      <li style={{ listStyle: "none" }}>MG</li>
      <li style={{ listStyle: "none" }}>USO MISTO</li>
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
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: titleGroup,
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
      title: "logo",
      isActive: false,
      isLink: true,
      route: "/",
      type: "logo",
    },
    {
      title: "PARA INVESTIR",
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
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Para Investir | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} />
    </>
  );
}
