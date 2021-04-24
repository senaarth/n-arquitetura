import { MainContainer } from "../components/MainContainer";

export default function Home() {
  const menuItems = [
    {
      title: "N!",
      isActive: false,
      route: "about",
      isLink: true,
      type: "text",
    },
    {
      title: "SOLUÇÕES",
      isActive: false,
      isLink: true,
      type: "text",
    },
    {
      title: "PROJETOS",
      isActive: false,
      isLink: true,
      type: "text",
    },
    {
      title: "CLIPPING",
      isActive: false,
      isLink: true,
      type: "text",
    },
    {
      title: "logo",
      isActive: false,
      isLink: false,
      type: "logo",
    },
    {
      title: "PARA INVESTIR",
      isActive: false,
      isLink: true,
      type: "text",
    },
    {
      title: "ÍNDICES ECONÔMICOS",
      isActive: false,
      isLink: true,
      type: "text",
    },
    {
      title: "PARCEIROS",
      isActive: false,
      isLink: true,
      type: "text",
    },
    {
      title: "CONTATO",
      isActive: false,
      isLink: true,
      type: "text",
    },
  ];

  return <MainContainer menuItems={menuItems} />;
}
