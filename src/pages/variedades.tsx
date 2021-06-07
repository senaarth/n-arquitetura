import { MainContainer } from "../components/MainContainer";
import Head from "next/head";
import React, { useState } from "react";

interface ContentProps {
  title?: string;
  description?: string;
}

export default function Clipping() {
  const [contentProps, setContentProps] = useState({} as ContentProps);

  const clipping = (
    <>
      <li style={{ listStyle: "none" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: 0 }}>Lorem Ipsum</h5>
          <a style={{ marginLeft: 10, color: "var(--red)", cursor: "pointer" }}>
            Ver Mais
          </a>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </li>
      <li style={{ listStyle: "none" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: 0 }}>Lorem Ipsum</h5>
          <a style={{ marginLeft: 10, color: "var(--red)", cursor: "pointer" }}>
            Ver Mais
          </a>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </li>
      <li style={{ listStyle: "none" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: 0 }}>Lorem Ipsum</h5>
          <a style={{ marginLeft: 10, color: "var(--red)", cursor: "pointer" }}>
            Ver Mais
          </a>
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
      title: "CLIPPING",
      isActive: false,
      isLink: false,
      type: "mobile",
      content: {
        description: clipping,
      },
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
      title: "VARIEDADES",
      isActive: true,
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
        <title>Clipping | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={contentProps}
        setContentProps={setContentProps}
      />
    </>
  );
}
