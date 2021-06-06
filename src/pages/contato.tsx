import Head from "next/head";
import { MainContainer } from "../components/MainContainer";

export default function Solucoes() {
  const menuItems = [
    {
      title: "YOUTUBE",
      isActive: false,
      isLink: true,
      route: "https://www.youtube.com/channel/UCFzQXHqQYS0IPLQNyJrBZLw",
      type: "contact",
    },
    {
      title: "LINKEDIN",
      isActive: false,
      isLink: true,
      route: "https://www.linkedin.com/company/n-arquitetura-gestão-e-negócios/",
      type: "contact",
    },
    {
      title: "INSTAGRAM",
      route: "https://www.instagram.com/n_arquiteturaegestao/",
      isActive: false,
      isLink: true,
      type: "contact",
    },
    {
      title: "FACEBOOK",
      isActive: false,
      isLink: true,
      route: "https://www.facebook.com/n.arquiteturaegestao",
      type: "contact",
    },
    {
      title: "logo",
      isActive: false,
      isLink: true,
      route: "/",
      type: "logo",
    },
    {
      title: "WHATSAPP",
      isActive: false,
      isLink: false,
      route: "https://wa.me/message/7NQ43WFZRLHKE1",
      type: "contact",
    },
    {
      title: "ENVIAR MENSAGEM",
      isActive: false,
      isLink: false,
      type: "contact",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "CONTATO",
      isActive: true,
      isLink: false,
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Contato | N!</title>
      </Head>
      <MainContainer menuItems={menuItems} contentProps={{ hasForm: true }} />
    </>
  );
}
