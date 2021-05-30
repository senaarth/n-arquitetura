import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

function Home() {
  const clipping = (
    <>
      <li style={{ listStyle: "none", paddingTop: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <h5 style={{ margin: 0 }}>Lorem Ipsum</h5>
          <a style={{ marginLeft: 10, color: "var(--red)", cursor: "pointer" }}>Ver Mais</a>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </li>
      <li style={{ listStyle: "none" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <h5 style={{ margin: 0 }}>Lorem Ipsum</h5>
          <a style={{ marginLeft: 10, color: "var(--red)", cursor: "pointer" }}>Ver Mais</a>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </li>
      <li style={{ listStyle: "none" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <h5 style={{ margin: 0 }}>Lorem Ipsum</h5>
          <a style={{ marginLeft: 10, color: "var(--red)", cursor: "pointer" }}>Ver Mais</a>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </li>
    </>
  );

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
      route: "solucoes",
      type: "text",
    },
    {
      title: "PROJETOS",
      isActive: false,
      isLink: true,
      route: "projetos",
      type: "text",
    },
    {
      title: "CLIPPING",
      isActive: false,
      isLink: true,
      content: clipping,
      type: "text",
      route: "clipping"
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
      route: "invest",
      type: "text",
    },
    {
      title: "ÍNDICES ECONÔMICOS",
      isActive: false,
      isLink: true,
      route: "indices",
      type: "text",
    },
    {
      title: "PARCEIROS",
      isActive: false,
      isLink: true,
      route: "parceiros",
      type: "text",
    },
    {
      title: "CONTATO",
      isActive: false,
      isLink: true,
      route: "contato",
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Home | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={{
          mobileDescription:
            "PARA NAVEGAR EM NOSSA PÁGINA BASTA SELECIONAR O CONTEÚDO DESEJADO, UTILIZANDO A EXCLAMAÇÃO PARA RETORNAR À HOME SE NECESSÁRIO.",
        }}
      />
    </>
  );
}

export default Home;
