import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a className={styles.active}>HOME</a>
          <a>N!</a>
          <a>SOLUÇÕES</a>
          <a>PROJETOS</a>
          <a>PARA INVESTIR</a>
          <a>PARCEIROS</a>
          <a>CONTATO</a>
        </nav>
        <img src="/images/logo.png" />
      </div>
    </header>
  );
}
