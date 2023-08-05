import React, { FunctionComponent, use } from "react";

import { Aside } from "./layout/Aside";
import { MenuList } from "./menu/MenuList";
import { MENUS } from "../constants";
import { Logo } from "./Logo";
import { TweetButton } from "./display/TweetButton";
import { UserButton } from "@/features/user/components/UserButton";
import { Block } from "./layout/Block";

interface Props {
  className?: string;
}

export const Sidebar: FunctionComponent<Props> = ({ className }) => {
  return (
    <Aside
      className={`
        w-full
        ${className || ""}
      `}
    >
      <Block
        className={`
        fixed
        flex flex-col justify-between
        h-screen max-h-screen
      `}
      >
        <Logo className="ml-6" />
        <MenuList menus={MENUS} className="mt-3" />
        <TweetButton label="ツイートする" className="w-[86%] ml-6 mt-3" />
        <Block className="mb-3 flex-1 flex flex-col-reverse">
          <UserButton className="w-[90%] ml-4" />
        </Block>
      </Block>
    </Aside>
  );
};
