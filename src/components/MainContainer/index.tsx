import { Dispatch, ReactElement, SetStateAction } from "react";

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
  hasVideo: boolean;
  videoSource: string;
  title: string;
}

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  carouselProps?: CarouselProps;
  mobileDescription?: string;
}

interface MenuProps {
  menuItems: MenuItem[];
  mobileMenuItems?: MenuItem[];
  contentProps?: ContentProps;
  setContentProps?: Dispatch<SetStateAction<ContentProps>>;
}

export function MainContainer({
  menuItems,
  contentProps,
  setContentProps,
  mobileMenuItems,
}: MenuProps) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <Menu
          menuItems={menuItems}
          setContent={setContentProps}
          mobileMenuItems={mobileMenuItems}
        />
        <ContentContainer
          title={contentProps?.title}
          subtitle={contentProps?.subtitle}
          description={contentProps?.description}
          carouselProps={contentProps?.carouselProps}
          mobileDescription={contentProps?.mobileDescription}
        />
      </div>
    </main>
  );
}
