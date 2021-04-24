import { Menu } from "../Menu";
import { ContentContainer } from "../ContentContainer";
import styles from "./styles.module.scss";

export function MainContainer() {
  return (
    <main className={styles.mainContainer}>
      <Menu />
      <ContentContainer />
    </main>
  );
}
