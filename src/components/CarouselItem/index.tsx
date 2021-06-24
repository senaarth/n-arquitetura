import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { FaPlayCircle, FaFilePdf } from "react-icons/fa";
import ReactPlayer from "react-player";
import Modal from "react-bootstrap/Modal";

import styles from "./styles.module.scss";

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

export function CarouselItem({
  slidesSources,
  hasVideo,
  hasFile,
  fileSources,
  videoSource,
  title,
  videoPreview
}: CarouselProps) {
  const [index, selectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [videoPlay, setVideoPlay] = useState(false);
  const [slidesNumber, setSlidesNumber] = useState(slidesSources.length);
  const video = document.querySelector("video");

  const handleSelect = (selectedIndex) => {
    selectIndex(selectedIndex);
  };

  React.useEffect(() => {
    if (hasVideo && hasFile) {
      setSlidesNumber(slidesNumber + 2);
      return;
    } else if (hasVideo || hasFile) {
      setSlidesNumber(slidesNumber + 1);
      return;
    }
  }, []);

  React.useEffect(() => {
    if (index >= slidesNumber) {
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
                src={videoPreview}
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
            </div>
          </Carousel.Item>
        )}
        {hasFile && (
          fileSources.map((source, index) => (
            <Carousel.Item>
              <div
                className={styles.carouselContentContainer}
                style={{ position: "relative" }}
                onClick={() => {
                  window.open(source.fileSource);
                }}
              >
                <Image
                  className={styles.videoPlayImg}
                  src={source.backgroundSource}
                  alt={title}
                  width="1000"
                  height="550"
                  priority
                />
                <FaFilePdf
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
              </div>
            </Carousel.Item>
          ))
        )}
      </Carousel>
      <div className={styles.textContainer}>
        {windowWidth > 1023 && <h5>{title}</h5>}
        {
          <h5 style={{ fontSize: "0.9rem", lineHeight: "0.9rem" }}>
            {index + 1}/{slidesNumber}
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
