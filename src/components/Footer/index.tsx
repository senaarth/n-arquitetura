import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

import { getCurrencies } from "../../services/getCurrencies";
import styles from "./styles.module.scss";

interface FooterProps {
  financeKey: string;
}

export function Footer({ financeKey } : FooterProps) {
  const data = new Date();
  const year = data.toDateString().split(" ")[3];

  const [index, selectIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    selectIndex(selectedIndex);
  };

  const [indices, setIndices] = useState({
    USD: "",
    EUR: "",
    selic: "",
    BTC: ""
  });

  useEffect(() => {
    async function getIndices() {
      await getCurrencies({ financeKey, setIndices });
    }
    getIndices();
  }, []);

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.indexesContent}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            controls={false}
            interval={7500}
            className="h-100 w-100 d-flex flex-row align-items-center"
          >
          <Carousel.Item>
            <div className="d-flex flex-row align-items-center justify-content-between w-100 h-100">
              <p className="m-0">USD {parseFloat(indices.USD).toPrecision(3)}</p>
              <p className="m-0">EUR {parseFloat(indices.EUR).toPrecision(3)}</p>
              <p className="m-0">BTC {parseFloat(indices.BTC).toPrecision(3)}k</p>
              <p className="m-0">ETH 18.5k</p>
            </div>
          </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-row align-items-center justify-content-between w-100 h-100">
                <p className="m-0">IGP-M 6.68%</p>
                <p className="m-0">IPC-A 4.52%</p>
                <p className="m-0">SELIC {parseFloat(indices.selic).toPrecision(3)}%</p>
                <p className="m-0">INCC 4.14%</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.contactContent}>
          <div className={styles.socialContainer}>
            <a
              href="https://api.whatsapp.com/send?phone=556137973825"
              target="blank"
            >
              <FaWhatsapp color="white" size={19.25} />
            </a>
            <a href="#" target="blank">
              <FaInstagram color="white" size={19.25} />
            </a>
            <a
              href="https://www.linkedin.com/company/n-arquitetura-gest%C3%A3o-e-neg%C3%B3cios/about/"
              target="blank"
            >
              <FaLinkedin color="white" size={19.25} />
            </a>
            <a href="#" target="blank" style={{ paddingTop: "0.21%" }}>
              <FaYoutube color="white" size={24.5} />
            </a>
            <a href="#" target="blank">
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
