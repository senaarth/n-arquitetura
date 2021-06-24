import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import styles from "./styles.module.scss";
import { CarouselItem } from "../CarouselItem";
import { ContactForm } from "../ContactForm";

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
  locationData?: {
    latitude?: number;
    longitude?: number;
  };
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

  if (props.type === "location") {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <a
          className={styles.menuItem}
          style={{
            ...dynamicStyles,
            cursor: "pointer",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <MdLocationOn
            color="black"
            size={22}
            style={{ position: "absolute", top: 15, right: 15 }}
          />
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
                width: "100%",
                margin: "0 auto",
                listStyle: "none",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBTTvmg5lseiIJZfbamPxHJl76T-8Rd-gA&q=N!+Arquitetos+DF&center=${props.locationData.latitude},${props.locationData.longitude}&zoom=15`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  maxWidth: "100%",
                  minHeight: "calc(50vh)",
                  padding: 0,
                }}
                loading="lazy"
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  if (props.type === "contactForm") {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <a
          className={styles.menuItem}
          style={{
            ...dynamicStyles,
            ...hoverStyle,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            filter: props.windowWidth > 1023 && "none",
          }}
          onClick={() => {
            if (props.windowWidth < 1024) {
              setIsModalOpen(true);
              return;
            }
          }}
        >
          {props.windowWidth < 1024 ? (
            <IoMdMail
              color="black"
              size={20}
              style={{ position: "absolute", top: 15, right: 15 }}
            />
          ) : (
            ""
          )}
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
                width: "100%",
                margin: "0 auto",
                listStyle: "none",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <ContactForm />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  if (props.type === "contact") {
    let icon;

    switch (props.title) {
      case "WHATSAPP":
        icon = (
          <FaWhatsapp
            color="black"
            size={20}
            style={{ position: "absolute", top: 15, right: 15 }}
          />
        );
        break;
      case "INSTAGRAM":
        icon = (
          <FaInstagram
            color="black"
            size={20}
            style={{ position: "absolute", top: 15, right: 15 }}
          />
        );
        break;
      case "LINKEDIN":
        icon = (
          <FaLinkedin
            color="black"
            size={20}
            style={{ position: "absolute", top: 15, right: 15 }}
          />
        );
        break;
      case "YOUTUBE":
        icon = (
          <FaYoutube
            color="black"
            size={20}
            style={{ position: "absolute", top: 15, right: 15 }}
          />
        );
        break;
      case "FACEBOOK":
        icon = (
          <FaFacebook
            color="black"
            size={20}
            style={{ position: "absolute", top: 15, right: 15 }}
          />
        );
        break;
    }

    return (
      <a
        className={styles.menuItem}
        style={{
          ...dynamicStyles,
          ...hoverStyle,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
        }}
        target="blank"
        href={props.route}
        onClick={() => {
          if (props.content) {
            props.setContent(props.content);
          }
        }}
      >
        {icon}
      </a>
    );
  }

  if (props.type === "mobile") {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <a
          className={styles.menuItem}
          style={{
            ...dynamicStyles,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => {
            if (props.content && props.windowWidth < 1024) {
              setIsModalOpen(true);
              return;
            }
            if (props.content.carouselProps) {
              props.setContent({
                title: props.content.carouselProps.title,
                carouselProps: props.content.carouselProps
              });
              return;
            }
            props.setContent(props.content);
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: props.title.toString(),
            }}
          />
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
                width: "90%",
                margin: "0 auto",
                listStyle: "none",
                paddingTop: "1rem",
              }}
            >
              <div className={styles.modalDescription}>
                {
                  props.content.carouselProps ? (
                    <CarouselItem
                      slidesSources={props.content.carouselProps.slidesSources}
                      hasVideo={props.content.carouselProps.hasVideo}
                      videoPreview={props.content.carouselProps.videoPreview}
                      videoSource={props.content.carouselProps.videoSource}
                      hasFile={props.content.carouselProps.hasFile}
                      fileSources={props.content.carouselProps.fileSources}
                      title={props.content.title}
                    />
                  ) : (
                    <>
                      <h1>{props.content.title}</h1>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: props.content.description,
                        }}
                      />
                    </>
                  )
                }
              </div>
            </div>
          </Modal.Body>
        </Modal >
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
          src={`${props.path}`}
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
            if (props.content && props.windowWidth > 1023) {
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
            src={props.path}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <img
                  src={`${props.path}`}
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
                <div
                  style={{
                    fontSize: "0.9rem",
                    margin: 0,
                    paddingBottom: "1.2rem",
                  }}
                  className={styles.modalDescription}
                  dangerouslySetInnerHTML={{
                    __html: props.content.description,
                  }}
                />
              </div>
            ) : (
              <CarouselItem
                slidesSources={props.content.carouselProps.slidesSources}
                hasVideo={props.content.carouselProps.hasVideo}
                videoSource={props.content.carouselProps.videoSource}
                videoPreview={props.content.carouselProps.videoPreview}
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
          if (props.content && props.title !== "CLIPPING") {
            props.setContent(props.content);
          }
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: props.title.toString(),
          }}
        />
      </a>
    </Link>
  ) : (
    <a
      className={styles.menuItem}
      style={{
        ...dynamicStyles,
        filter: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={() => {
        if (props.content) {
          props.setContent(props.content);
        }
        if (props.filePath) {
          window.open(props.filePath);
        }
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: props.title.toString(),
        }}
      />
    </a>
  );
}
