import { Dispatch, ReactElement, SetStateAction, useEffect } from "react";

import { Menu } from "../Menu";
import { ContentContainer } from "../ContentContainer";
import styles from "./styles.module.scss";

interface MenuItem {
  title: string | ReactElement;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  path?: string;
  type: string;
}

interface CarouselProps {
  slidesSources: string[];
}

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  carouselProps?: CarouselProps;
}

interface MenuProps {
  menuItems: MenuItem[];
  contentProps?: ContentProps;
  setContentProps?: Dispatch<SetStateAction<ContentProps>>;
}

export function MainContainer({
  menuItems,
  contentProps,
  setContentProps,
}: MenuProps) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <Menu menuItems={menuItems} setContent={setContentProps} />
        <ContentContainer
          title={contentProps?.title}
          subtitle={contentProps?.subtitle}
          description={contentProps?.description}
          carouselProps={contentProps?.carouselProps}
        />
      </div>
    </main>
  );
}
