import { MainContainer } from "../components/MainContainer";

export default function Parceiros() {
  const menuItems = [
    {
      title: "",
      isActive: false,
      isLink: false,
      path: "katai_logo.png",
      type: "imageContainer",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      path: "imo-logo.jpg",
      type: "imageContainer",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      path: "cima_logo.png",
      type: "imageContainer",
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
      path: "allsix_logo.png",
      type: "imageContainer",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "PARCEIROS",
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
  ];

  return <MainContainer menuItems={menuItems} />;
}
