import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>HOME</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/about">
            <a>N!</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/solucoes">
            <a>SOLUÇÕES</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/projetos">
            <a>PROJETOS</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/invest">
            <a>
              <li style={{listStyle: "none", textAlign: "center"}}>
                PARA
              </li>
              <li style={{listStyle: "none", textAlign: "center"}}>
                INVESTIR
              </li>
            </a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/parceiros">
            <a>PARCEIROS</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/contato">
            <a>CONTATO</a>
          </ActiveLink>
        </nav>
        <img src="/static/images/logo.png" />
      </div>
    </header>
  );
}
