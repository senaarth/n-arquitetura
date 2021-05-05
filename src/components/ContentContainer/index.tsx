import { CarouselItem } from "../CarouselItem/";
import styles from "./styles.module.scss";

interface CarouselProps {
  slidesSources?: string[];
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
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.subtitle}>{props.subtitle}</h2>
      <p className={styles.description}>{props.description}</p>
      {props.carouselProps && (
        <CarouselItem
          slidesSources={props.carouselProps.slidesSources}
        />
      )}
    </div>
  );
}
