import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import Modal from "react-bootstrap/Modal";

import styles from "./styles.module.scss";

interface CarouselProps {
  hasVideo: boolean;
  slidesSources: string[];
  videoSource: string;
  title: string;
}

export function CarouselItem({
  slidesSources,
  hasVideo,
  videoSource,
  title,
}: CarouselProps) {
  const [index, selectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleSelect = (selectedIndex) => {
    selectIndex(selectedIndex);
  };

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        interval={100000}
        className={styles.carousel}
      >
        {slidesSources.map((source, index) => (
          <Carousel.Item key={index}>
            <div className={styles.carouselContentContainer}>
              <Image
                className="d-block w-100"
                src={source}
                alt="First slide"
                width="1000"
                height="550"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.textContainer}>
        {windowWidth > 1024 && <h5>{title}</h5>}
        {hasVideo && (
          <FaPlayCircle
            color="black"
            size={20}
            onClick={() => {
              setIsModalOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        )}
        <Modal
          show={isModalOpen}
          onHide={() => {
            setIsModalOpen(false);
          }}
          size="lg"
          style={{ maxWidth: "100%" }}
        >
          {/* <Modal.Header closeButton>
            <h2 style={{ margin: 0 }}>{title}</h2>
          </Modal.Header> */}
          <Modal.Body style={{ padding: 0 }}>
            <ReactPlayer
              playbackRate={2}
              playing={true}
              url={videoSource}
              controls={true}
              style={{
                margin: "0 auto",
                width: "100%",
                maxWidth: "100%",
                padding: 0,
              }}
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
