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
  const [videoPlay, setVideoPlay] = useState(false);
  const video = document.querySelector("video");

  const handleSelect = (selectedIndex) => {
    selectIndex(selectedIndex);
  };

  React.useEffect(() => {
    if (!hasVideo && index >= slidesSources.length) {
      selectIndex(0);
    } else if (hasVideo && index > slidesSources.length) {
      selectIndex(0);
    }
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
                alt={title}
                width="1000"
                height="550"
                priority
              />
            </div>
          </Carousel.Item>
        ))}
        {hasVideo && (
          <Carousel.Item>
            <div
              className={styles.carouselContentContainer}
              style={{ position: "relative" }}
              onClick={() => {
                if (windowWidth > 1023) {
                  setIsModalOpen(true);
                  return;
                }
                setVideoPlay(true);
                if (video.requestFullscreen) {
                  video.requestFullscreen();
                }
              }}
            >
              <Image
                className={styles.videoPlayImg}
                src={slidesSources[0]}
                alt={title}
                width="1000"
                height="550"
                priority
              />
              <FaPlayCircle
                color="white"
                size={40}
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
              <ReactPlayer
                playing={videoPlay}
                url={videoSource}
                controls={true}
                progressInterval={500}
                style={{
                  width: 0,
                  height: 0,
                  maxHeight: 0,
                  maxWidth: 0,
                }}
                onProgress={() => {
                  if (video && video.offsetHeight === 0) {
                    setVideoPlay(false);
                  }
                }}
                onEnded={() => {
                  setVideoPlay(false);
                }}
              />
            </div>
          </Carousel.Item>
        )}
      </Carousel>
      <div className={styles.textContainer}>
        {windowWidth > 1023 && <h5>{title}</h5>}
        {
          <h5 style={{ fontSize: "0.9rem", lineHeight: "0.9rem" }}>
            {index + 1}/
            {hasVideo ? slidesSources.length + 1 : slidesSources.length}
          </h5>
        }
        <Modal
          show={isModalOpen}
          onHide={() => {
            setIsModalOpen(false);
          }}
          size="lg"
          style={{ maxWidth: "100%" }}
        >
          <Modal.Header
            className={styles.modalHeader}
            closeButton
          ></Modal.Header>
          <Modal.Body>
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
