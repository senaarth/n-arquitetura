import styles from "./styles.module.scss";

export function Menu() {
  return (
    <div className={styles.menuContainer}>
      <a className={styles.menuItem}>N!</a>
      <a className={styles.menuItem}>SOLUÇÕES</a>
      <a className={styles.menuItem}>PROJETOS</a>

      <a className={styles.menuItem}>CLIPPING</a>
      <a className={styles.menuItem} href="javascript:history.back()">
          <img src="/images/exclamacao.png" alt="Exclamação Logo"/>
      </a>
      <a className={styles.menuItem}>PARA INVESTIR</a>

      <a className={styles.menuItem}>ÍNDICES ECONÔMICOS</a>
      <a className={styles.menuItem}>PARCEIROS</a>
      <a className={styles.menuItem}>CONTATO</a>
    </div>
  );
}
