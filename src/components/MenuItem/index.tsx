import { useRouter } from "next/router";
import Link from "next/link";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Modal from "react-bootstrap/Modal";

import styles from "./styles.module.scss";

interface ContentProps {
  title?: string;
  description?: string;
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
          <Modal.Header closeButton>
            <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{props.content.title}</h2>
          </Modal.Header>
          <Modal.Body>
            {props.content.description}
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
    return (
      <a
        className={styles.menuItemLogo}
        style={{
          ...dynamicStyles,
          position: "relative",
        }}
        onClick={() => {
          if (props.content) {
            props.setContent(props.content);
          }
        }}
      >
        <img
          src={`/static/images/${props.path}`}
          alt={`${props.title}`}
          className={styles.teamMember}
        />
      </a>
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
          style={{ height: "95%" }}
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
