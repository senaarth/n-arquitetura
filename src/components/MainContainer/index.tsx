import { Dispatch, ReactElement, SetStateAction } from "react";

import { Menu } from "../Menu";
import { ContentContainer } from "../ContentContainer";
import styles from "./styles.module.scss";

interface MenuItem {
  isShown?: boolean;
  title: string | ReactElement;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  path?: string;
  type: string;
  locationData?: {
    latitude?: number;
    longitude?: number;
  }
}

type FileSource = {
  fileSource: string;
  backgroundSource: string;
}

interface CarouselProps {
  hasVideo: boolean;
  slidesSources: string[];
  videoSource?: string;
  videoPreview?: string;
  hasFile?: boolean;
  fileSources?: FileSource[];
  title: string;
}

type Slide = {
  src?: string;
  hasZoom: boolean;
  centerImg: string;
  hasLink: boolean;
  link: string;
  hasPdf: boolean;
  pdfSrc: string;
  pdfBackground: string;
}

interface ContentProps {
  title?: string | ReactElement;
  subtitle?: string;
  description?: string;
  carouselProps?: CarouselProps;
  mobileDescription?: string | ReactElement;
  hasForm?: boolean;
  isHome?: boolean;
  slides?: Slide[];
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
          isHome={contentProps?.isHome}
          slides={contentProps?.slides}
          title={contentProps?.title}
          subtitle={contentProps?.subtitle}
          description={contentProps?.description}
          carouselProps={contentProps?.carouselProps}
          mobileDescription={contentProps?.mobileDescription}
          hasForm={contentProps?.hasForm}
        />
      </div>
    </main>
  );
}
