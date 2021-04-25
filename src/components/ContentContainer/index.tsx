import styles from "./styles.module.scss";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ContentContainer(props: ContentProps) {
  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.subtitle}>{props.subtitle}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
