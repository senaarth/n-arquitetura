import { Dispatch, SetStateAction, useEffect } from "react";

import { Menu } from "../Menu";
import { ContentContainer } from "../ContentContainer";
import styles from "./styles.module.scss";

interface MenuItem {
  title: string;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  path?: string;
  type: string;
}

interface ContentProps {
  title?: string;
  description?: string;
}

interface MenuProps {
  menuItems: MenuItem[];
  contentProps?: ContentProps;
  setContentProps?: Dispatch<SetStateAction<ContentProps>>;
}

export function MainContainer({ menuItems, contentProps, setContentProps }: MenuProps) {
  return (
    <main className={styles.mainContainer}>
      <Menu menuItems={menuItems} setContent={setContentProps}/>
      <ContentContainer
        title={contentProps?.title}
        description={contentProps?.description}
      />
    </main>
  );
}
