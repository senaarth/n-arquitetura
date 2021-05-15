import { CarouselItem } from "../CarouselItem/";
import styles from "./styles.module.scss";

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
}

export function ContentContainer(props: ContentProps) {
  return (
    <div className={styles.contentContainer}>
      {props.carouselProps && (
        <CarouselItem
          slidesSources={props.carouselProps.slidesSources}
          hasVideo={props.carouselProps.hasVideo}
          videoSource={props.carouselProps.videoSource}
          title={props.carouselProps.title}
        />
      )}
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.subtitle}>{props.subtitle}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
