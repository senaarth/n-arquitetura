import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

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
              href="https://wa.me/message/7NQ43WFZRLHKE1"
              target="blank"
            >
              <FaWhatsapp color="white" size={19.25} />
            </a>
            <a href="https://www.instagram.com/n_arquiteturaegestao/" target="blank">
              <FaInstagram color="white" size={19.25} />
            </a>
            <a
              href="https://www.linkedin.com/company/n-arquitetura-gestão-e-negócios/"
              target="blank"
            >
              <FaLinkedin color="white" size={19.25} />
            </a>
            <a href="https://www.youtube.com/channel/UCFzQXHqQYS0IPLQNyJrBZLw" target="blank" style={{ paddingTop: "0.21%" }}>
              <FaYoutube color="white" size={24.5} />
            </a>
            <a href="https://www.facebook.com/n.arquiteturaegestao" target="blank">
              <FaFacebook color="white" size={19.25} />
            </a>
          </div>
          <div className={styles.companyContainer}>
            <p>N! ARQUITETURA</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
