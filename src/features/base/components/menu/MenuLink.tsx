import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Menu } from "../../types";
import { Block } from "../layout/Block";
import { Inline } from "../layout/Inline";

interface Props extends Menu {}

export const MenuLink: FunctionComponent<Props> = ({ url, title, Icon }) => {
  return (
    <Link href={url}>
      <Block className="w-full px-4 py-1">
        <Block
          className={`
            grid grid-cols-[min-content,1fr] items-center
            px-4 py-3 
            rounded-full 
            hover:bg-gray-100 
            transition duration-200 w-fit 
            cursor-pointer
          `}
        >
          <Icon className={`font-black w-8 h-8`} />

          <Inline className={`pl-2 text-xl`}>{title}</Inline>
        </Block>
      </Block>
    </Link>
  );
};
