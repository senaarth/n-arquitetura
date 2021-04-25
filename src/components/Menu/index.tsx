import { Dispatch, SetStateAction } from "react";
import { MenuItem } from "../MenuItem";

import styles from "./styles.module.scss";

interface ContentProps {
  title?: string;
  description?: string;
}

interface MenuItem {
  title: string;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  type: string;
  content?: ContentProps;
}

interface MenuProps {
  menuItems: MenuItem[];
  setContent?: Dispatch<SetStateAction<ContentProps>>;
}

export function Menu({ menuItems, setContent }: MenuProps) {
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
              content={s.content}
              setContent={setContent}
              type={s.type}
            />
          );
        })
      }
    </div>
  );
}