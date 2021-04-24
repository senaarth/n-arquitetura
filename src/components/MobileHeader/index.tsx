import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";

export function MobileHeader() {
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      variant="dark"
      className={styles.navbarContainer}
    >
      <Navbar.Brand>
        <img src="/images/logo.png" alt="N! Arquitetura Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>N!</Nav.Link>
          <Nav.Link>SOLUÇÕES</Nav.Link>
          <Nav.Link>PROJETOS</Nav.Link>
          <Nav.Link>PARA INVESTIR</Nav.Link>
          <Nav.Link>PARCEIROS</Nav.Link>
          <Nav.Link>CONTATO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
