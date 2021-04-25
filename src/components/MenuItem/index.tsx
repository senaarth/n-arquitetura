import { useRouter } from "next/router";
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

  if (props.type === "logo" || props.type === "goBack") {
    return (
      <a
        className={styles.menuItemLogo}
        style={dynamicStyles}
        href={props.route && `${props.route}`}
      >
        <img src="images/exclamacao.png" alt="N!" />
      </a>
    );
  }
  return (
    <a
      href={props.route && `/${props.route}`}
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
