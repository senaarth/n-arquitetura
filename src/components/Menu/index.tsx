import { MenuItem } from "../MenuItem";

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

export function Menu({ menuItems }: MenuProps) {
  return (
    <div className={styles.menuContainer}>
      {
        menuItems.map((s, i) => {
          return (
            <MenuItem
              key={i}
              title={s.title}
              isActive={s.isActive}
              isLink={s.isLink}
              route={s.route}
              type={s.type}
            />
          );
        })
      }
    </div>
  );
}
