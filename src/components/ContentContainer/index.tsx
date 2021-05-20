import React, { useState } from "react";
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
  mobileDescription?: string;
}

export function ContentContainer(props: ContentProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const content = (
    <div className={styles.contentContainer}>
      {props.carouselProps ? (
        <CarouselItem
          slidesSources={props.carouselProps.slidesSources}
          hasVideo={props.carouselProps.hasVideo}
          videoSource={props.carouselProps.videoSource}
          title={props.title}
        />
      ) : (
        <div className={styles.content}>
          <h1 className={styles.title}>{props.title}</h1>
          <h2 className={styles.subtitle}>{props.subtitle}</h2>
          <p className={styles.description}>{props.description}</p>
        </div>
      )}
    </div>
  );

  const mobileContent = (
    <div className={styles.contentContainer} style={{ fontSize: "0.7rem" }}>
      <div className={styles.content}>
        <p>{props.mobileDescription}</p>
      </div>
    </div>
  );

  return windowWidth > 1023 ? content : mobileContent;
}
