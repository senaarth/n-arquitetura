import React, { useState, ReactElement } from "react";
import { Modal } from "react-bootstrap";
import { CarouselItem } from "../CarouselItem/";
import { ContactForm } from "../ContactForm/";
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

interface ContentProps {
  title?: string | ReactElement;
  subtitle?: string;
  description?: string;
  carouselProps?: CarouselProps;
  mobileDescription?: string | ReactElement;
  hasForm?: boolean;
  mobileForm?: boolean;
}

export function ContentContainer(props: ContentProps) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const content = (
    <div className={styles.contentContainer}>
      {props.carouselProps ? (
        <CarouselItem
          slidesSources={props.carouselProps.slidesSources}
          hasVideo={props.carouselProps.hasVideo}
          videoPreview={props.carouselProps.videoPreview}
          videoSource={props.carouselProps.videoSource}
          title={props.title}
          hasFile={props.carouselProps.hasFile}
          fileSources={props.carouselProps.fileSources}
        />
      ) : (
        <div className={styles.content}>
          {props.hasForm ? (
            <ContactForm />
          ) : (
            <>
              <h1 className={styles.title}>{props.title}</h1>
              <h2 className={styles.subtitle}>{props.subtitle}</h2>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: props.description }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );

  const mobileContent = (
    <div className={styles.contentContainer} style={{ fontSize: "0.7rem" }}>
      <div className={styles.content}>
        {
          props.hasForm ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h5
                style={{
                  fontSize: "1rem",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                FALE CONOSCO
              </h5>
              <input
                onClick={() => setIsModalOpen(true)}
                style={{
                  width: "50%",
                  marginRight: "auto",
                  marginLeft: "auto",
                  outline: "none !important",
                  paddingLeft: 5,
                  paddingTop: 2,
                  paddingBottom: 2,
                  border: "1px solid lightgray",
                  borderRadius: 6,
                }}
                placeholder="Sua Mensagem"
              />
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
            </div>
          ) : (
            props.mobileDescription
          )
        }
      </div>
    </div>
  );

  return windowWidth > 1023 ? content : mobileContent;
}
