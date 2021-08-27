import React, { useState, ReactElement } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import ReactPlayer from "react-player";

import styles from "./styles.module.scss";

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

interface CarouselProps {
  slides: Slide[];
}

export function HomeCarousel({
  slides
}: CarouselProps) {
  const [index, selectIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    selectIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      interval={3000}
      className={styles.carousel}
    >
      {
        slides.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              {
                item.src && !item.hasZoom && !item.hasLink && !item.hasPdf && (
                  <Image
                    src={item.src}
                    layout="fill"
                  />
                )
              }
              {
                item.src && item.hasZoom && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "black",
                    }}
                  >
                    <Image
                      src={item.src}
                      layout="fill"
                      className={styles.zoomBackground}
                    />
                    <div 
                      style={{
                        width: "60%",
                        height: "60%",
                      }}
                      className={styles.imgCenterContainer}
                    >
                      <Image
                        src={item.centerImg}
                        layout="fill"
                        className={styles.zoomCenter}
                      />
                    </div>
                  </div>
                )
              }
              {
                item.hasLink && item.src && item.link && (
                  <a href={item.link} style={{ width: "100%", height: "100%" }}>
                    <Image
                      src={item.src}
                      layout="fill"
                    />
                  </a>
                )
              }
              {
                item.hasPdf && item.pdfSrc && (
                  <div
                    className={styles.pdfImage}
                    onClick={() => window.open(item.pdfSrc)}
                  >
                    <Image
                      src={item.src}
                      layout="fill"
                    />
                    <FaFilePdf
                      color="white"
                      size={65}
                      className={styles.videoPlayIcon}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: "auto",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                )
              }
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}
