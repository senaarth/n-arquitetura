import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { MenuItem } from "../MenuItem";

import styles from "./styles.module.scss";

interface ContentProps {
  title?: string;
  description?: string;
}

interface MenuItem {
  title: string | ReactElement;
  isActive: boolean;
  isLink: boolean;
  route?: string;
  path?: string;
  type: string;
  content?: ContentProps;
}

interface MenuProps {
  menuItems: MenuItem[];
  mobileMenuItems: MenuItem[];
  setContent?: Dispatch<SetStateAction<ContentProps>>;
}

export function Menu({ menuItems, setContent, mobileMenuItems }: MenuProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const menu = (
    <div className={styles.menuContainer}>
      {menuItems.map((s, i) => {
        return (
          <MenuItem
            key={i}
            title={s.title}
            isActive={s.isActive}
            isLink={s.isLink}
            route={s.route}
            content={s.content}
            setContent={setContent}
            path={s.path}
            type={s.type}
          />
        );
      })}
    </div>
  );

  const mobileMenu = (
    <div className={styles.menuContainer}>
      {mobileMenuItems &&
        mobileMenuItems.map((s, i) => {
          return (
            <MenuItem
              key={i}
              title={s.title}
              isActive={s.isActive}
              isLink={s.isLink}
              route={s.route}
              content={s.content}
              setContent={setContent}
              path={s.path}
              type={s.type}
            />
          );
        })}
    </div>
  );

  return windowWidth < 1024 && mobileMenuItems ? mobileMenu : menu;
}
