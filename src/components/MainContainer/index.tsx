import { Menu } from "../Menu";
import { ContentContainer } from "../ContentContainer";
import styles from "./styles.module.scss";

interface MenuItem {
  title: string;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  type: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

export function MainContainer({ menuItems }: MenuProps) {
  return (
    <main className={styles.mainContainer}>
      <Menu menuItems={menuItems}/>
      <ContentContainer />
    </main>
  );
}
