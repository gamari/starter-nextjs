import React from "react";

import { Block } from "./layout/Block";
import Link from "next/link";
import { Overlay } from "./layout/Overlay";

export const Header = () => {
  return (
    <header className="md:h-[180px] bg-[url('/images/header.jpg')] bg-center">
      <Overlay className="flex items-center justify-center">
        <Link href="/">
          <Block
            className={`
              text-3xl md:text-6xl
              font-bold 
              text-white
            `}
          >
            Gamari&apos;s Blog
          </Block>
        </Link>
      </Overlay>
    </header>
  );
};
