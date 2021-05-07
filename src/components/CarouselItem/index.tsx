import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./styles.module.scss";

interface CarouselProps {
  slidesSources: string[];
}

export function CarouselItem({ slidesSources }: CarouselProps) {
  const [index, selectIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    selectIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      interval={10000}
      className={styles.carousel}
    >
      {slidesSources.map((source) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={source}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
