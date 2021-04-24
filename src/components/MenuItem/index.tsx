import { useRouter } from "next/router";

import styles from "./styles.module.scss";

interface MenuItemProps {
  title: string;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  type: string;
}

export function MenuItem(props: MenuItemProps) {
  const router = useRouter();
  const dynamicStyles = {
    cursor: props.isLink ? "pointer" : "auto",
    backgroundColor: props.isActive ? "red" : "white",
    color: props.isActive ? "white" : "black",
  }
  
  if (props.type === "logo" || props.type === "goBack") {
    return (
      <a
        className={styles.menuItemLogo}
        style={dynamicStyles}
        onClick={() => {
          if (props.type === "goBack") {
            router.back();
          }
        }}
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
    >
      {props.title}
    </a>
  );
}
