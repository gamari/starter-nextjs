import React, { FunctionComponent } from "react";
import { MenuLink } from "./MenuLink";
import { Block } from "../layout/Block";
import { Menu } from "../../types";

interface Props {
  menus: Menu[];
  className?: string;
}

export const MenuList: FunctionComponent<Props> = ({ className, menus }) => {
  return (
    <Block
      className={`
        flex flex-col items-start 
        ${className || ""}
      `}
    >
      {menus.map((menuItem) => (
        <MenuLink
          key={menuItem.title}
          url={menuItem.url}
          title={menuItem.title}
          Icon={menuItem.Icon}
        />
      ))}
    </Block>
  );
};
