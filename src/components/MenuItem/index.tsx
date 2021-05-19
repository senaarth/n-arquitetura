import { useRouter } from "next/router";
import Link from "next/link";
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
}

export function MenuItem(props: MenuItemProps) {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

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
            if (props.content) {
              setIsModalOpen(true);
            }
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
              {props.content.description}
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
            if (props.content && windowWidth > 1025) {
              props.setContent(props.content);
              return;
            }
            setIsModalOpen(true);
          }}
        >
          <img
            src={`/static/images/${props.path}`}
            alt={`${props.title}`}
            className={styles.teamMember}
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
                <h5 style={{ textAlign: "center" }}>{props.content.title}</h5>
                <p
                  style={{ textAlign: "center", fontSize: "0.8rem", margin: 0 }}
                >
                  {props.content.description}
                </p>
              </>
            ) : (
              <CarouselItem
                slidesSources={props.content.carouselProps.slidesSources}
                hasVideo={false}
                videoSource=""
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
      <Link href={`${props.route}`}>
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
