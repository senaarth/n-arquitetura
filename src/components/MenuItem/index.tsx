import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Modal from "react-bootstrap/Modal";

import styles from "./styles.module.scss";
import { CarouselItem } from "../CarouselItem";

interface CarouselProps {
  hasVideo: boolean;
  slidesSources: string[];
  videoSource: string;
  title: string;
}

interface ContentProps {
  title?: string;
  description?: string;
  carouselProps?: CarouselProps;
}

interface MenuItemProps {
  title: string | ReactElement;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  path?: string;
  content: ContentProps;
  type: string;
  setContent?: Dispatch<SetStateAction<ContentProps>>;
  windowWidth?: number;
}

export function MenuItem(props: MenuItemProps) {
  const router = useRouter();

  let dynamicStyles = {
    cursor: props.isLink ? "pointer" : "auto",
    backgroundColor: props.isActive ? "#CC0000" : "white",
    color: props.isActive ? "white" : "black",
  };

  let hoverStyle = {};

  if (props.title === "") {
    hoverStyle = {
      ...dynamicStyles,
      filter: "none",
    };
  }

  if (props.type === "mobile") {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <a
          className={styles.menuItem}
          style={{
            ...dynamicStyles,
            ...hoverStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => {
            if (props.content && props.windowWidth < 1025) {
              setIsModalOpen(true);
              return;
            }
            props.setContent(props.content);
          }}
        >
          {props.title}
        </a>
        <Modal
          show={isModalOpen}
          onHide={() => {
            setIsModalOpen(false);
          }}
          size="lg"
          style={{ maxWidth: "100%" }}
          centered
        >
          <Modal.Header
            className={styles.modalHeader}
            closeButton
          ></Modal.Header>
          <Modal.Body>
            <div
              style={{
                textAlign: "center",
                width: "80%",
                margin: "0 auto",
                listStyle: "none",
                paddingTop: "1rem",
              }}
            >
              <p className={styles.modalDescription}>
                <h1>{props.content.title}</h1>
                {props.content.description}
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  if (props.type === "imageContainer") {
    return (
      <a
        className={styles.menuItemLogo}
        style={{
          ...dynamicStyles,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={`/static/images/${props.path}`}
          alt={`${props.title}`}
          className={styles.partnerLogo}
        />
      </a>
    );
  }

  if (props.type === "teamMember" || props.type === "project") {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <a
          className={styles.menuItemLogo}
          style={{
            ...dynamicStyles,
            position: "relative",
          }}
          onClick={() => {
            if (props.content && props.windowWidth > 1025) {
              if (props.content.carouselProps) {
                props.setContent({
                  carouselProps: props.content.carouselProps,
                  title: props.content.carouselProps.title,
                });
              } else {
                props.setContent(props.content);
              }

              const images = document.querySelectorAll("img");

              images.forEach((img) => {
                if (img.id === "grayScalable" && img.alt !== props.title) {
                  img.style.transition = "filter 0.4s";
                  img.style.filter = "grayscale(1)";
                  return;
                }
                img.style.filter = "grayscale(0)";
              });

              return;
            }
            setIsModalOpen(true);
          }}
        >
          <Image
            src={`/static/images/${props.path}`}
            alt={`${props.title}`}
            className={styles.teamMember}
            id="grayScalable"
            priority
            layout="fill"
          />
        </a>
        <Modal
          className={
            props.type === "project"
              ? styles.projectModal
              : styles.teamMemberModal
          }
          show={isModalOpen}
          onHide={() => {
            setIsModalOpen(false);
          }}
          size="lg"
          style={{ maxWidth: "100%" }}
          centered
        >
          <Modal.Header
            className={styles.modalHeader}
            closeButton
          ></Modal.Header>
          <Modal.Body>
            {props.type === "teamMember" ? (
              <>
                <img
                  src={`/static/images/${props.path}`}
                  alt={`${props.title}`}
                  style={{
                    width: "100%",
                    height: "150px",
                    borderRadius: "6px",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    objectFit: "cover",
                  }}
                />
                <h5 style={{ textAlign: "center" }}>{props.content.title}</h5>
                <p
                  style={{
                    fontSize: "0.9rem",
                    margin: 0,
                    paddingBottom: "1.2rem",
                  }}
                  className={styles.modalDescription}
                >
                  {props.content.description}
                </p>
              </>
            ) : (
              <CarouselItem
                slidesSources={props.content.carouselProps.slidesSources}
                hasVideo={false}
                videoSource={props.content.carouselProps.videoSource}
                title={props.content.carouselProps.title}
              />
            )}
          </Modal.Body>
        </Modal>
      </>
    );
  }

  if (props.type === "logo" || props.type === "goBack") {
    return props.route ? (
      <Link href="/">
        <a className={styles.menuItemLogo} style={dynamicStyles}>
          <img
            src="/static/images/exclamacao.png"
            alt="N!"
            style={{ height: "95%" }}
          />
        </a>
      </Link>
    ) : (
      <a className={styles.menuItemLogo} style={dynamicStyles}>
        <img
          src="/static/images/exclamacao.png"
          alt="N!"
          style={{ height: "95%", maxWidth: "100%", objectFit: "cover" }}
        />
      </a>
    );
  }

  return props.route ? (
    <Link href={`/${props.route}`}>
      <a
        className={styles.menuItem}
        style={{
          ...dynamicStyles,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={() => {
          if (props.content) {
            props.setContent(props.content);
          }
        }}
      >
        {props.title}
      </a>
    </Link>
  ) : (
    <a
      className={styles.menuItem}
      style={{
        ...dynamicStyles,
        ...hoverStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={() => {
        if (props.content) {
          props.setContent(props.content);
        }
      }}
    >
      {props.title}
    </a>
  );
}
