import styles from "./styles.module.scss";

interface ContentProps {
  title?: string;
  description?: string;
}

export function ContentContainer(props: ContentProps) {
  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
