import { useRouter } from "next/router";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import styles from "./styles.module.scss";

interface ContentProps {
  title?: string;
  description?: string;
}

interface MenuItemProps {
  title: string;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  path?: string;
  content: ContentProps;
  type: string;
  setContent?: Dispatch<SetStateAction<ContentProps>>;
}

export function MenuItem(props: MenuItemProps) {
  const router = useRouter();
  const dynamicStyles = {
    cursor: props.isLink ? "pointer" : "auto",
    backgroundColor: props.isActive ? "red" : "white",
    color: props.isActive ? "white" : "black",
  };

  if (props.type === "imageContainer") {
    return (
      <a
        className={styles.menuItemLogo}
        style={{
          ...dynamicStyles,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={`images/${props.path}`}
          alt={`Parceiro: ${props.title}`}
          className={styles.partnerLogo}
        />
      </a>
    );
  }

  if (props.type === "teamMember") {
    return (
      <a
        className={styles.menuItemLogo}
        style={{
          ...dynamicStyles,
          position: "relative",
        }}
        onClick={() => {
          if (props.content) {
            props.setContent(props.content);
          }
        }}
      >
        <img
          src={`images/${props.path}`}
          alt={`Membro do time: ${props.title}`}
          className={styles.teamMember}
        />
      </a>
    );
  }

  if (props.type === "logo" || props.type === "goBack") {
    return props.route ? (
      <Link href={`${props.route}`}>
        <a className={styles.menuItemLogo} style={dynamicStyles}>
          <img src="images/exclamacao.png" alt="N!" />
        </a>
      </Link>
    ) : (
      <a className={styles.menuItemLogo} style={dynamicStyles}>
        <img src="images/exclamacao.png" alt="N!" />
      </a>
    );
  }
  return props.route ? (
    <Link href={`/${props.route}`}>
      <a
        className={styles.menuItem}
        style={dynamicStyles}
        onClick={() => {
          if (props.content) {
            props.setContent(props.content);
          }
        }}
      >
        {props.title}
      </a>
    </Link>
  ) : (
    <a
      className={styles.menuItem}
      style={dynamicStyles}
      onClick={() => {
        if (props.content) {
          props.setContent(props.content);
        }
      }}
    >
      {props.title}
    </a>
  );
}
