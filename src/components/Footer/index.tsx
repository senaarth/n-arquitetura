import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import styles from "./styles.module.scss";

export function Footer() {
  const data = new Date();
  const year = data.toDateString().split(" ")[3];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.contactContent}>
          <div className={styles.socialContainer}>
            <a
              href="https://api.whatsapp.com/send?phone=556137973825"
              target="blank"
            >
              <FaWhatsapp color="white" size={19.25} />
            </a>
            <a
              href="#"
              target="blank"
            >
              <FaInstagram color="white" size={19.25} />
            </a>
            <a
              href="https://www.linkedin.com/company/n-arquitetura-gest%C3%A3o-e-neg%C3%B3cios/about/"
              target="blank"
            >
              <FaLinkedin color="white" size={19.25} />
            </a>
            <a
              href="#"
              target="blank"
              style={{ paddingTop: "0.21%" }}
            >
              <FaYoutube color="white" size={24.5} />
            </a>
            <a
              href="#"
              target="blank"
            >
              <FaFacebook color="white" size={19.25} />
            </a>
          </div>
          <p>N! ARQUITETURA © {year}</p>
        </div>
      </div>
    </footer>
  );
}
