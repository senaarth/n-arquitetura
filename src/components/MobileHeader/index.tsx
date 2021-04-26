import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";

export function MobileHeader() {
  return (
    <div style={{
      width: "100%",
      backgroundColor: "black"
    }}>
      <Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        className={styles.navbarContainer}
      >
        <Navbar.Brand>
          <Link href="/">
            <img src="/images/logo.png" alt="N! Arquitetura Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">N!</Nav.Link>
            <Nav.Link href="/solucoes">SOLUÇÕES</Nav.Link>
            <Nav.Link href="/projetos">PROJETOS</Nav.Link>
            <Nav.Link href="/invest">PARA INVESTIR</Nav.Link>
            <Nav.Link href="/parceiros">PARCEIROS</Nav.Link>
            <Nav.Link href="/contato">CONTATO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
