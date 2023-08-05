import React, { FunctionComponent } from "react";
import Image from "next/image";

import { Block } from "./layout/Block";

interface Props {
  width?: number;
  height?: number;
  src: string;
  className?: string;
}

export const FilledImage: FunctionComponent<Props> = ({
  width = 100,
  height = 100,
  src,
  className,
}) => {
  return (
    <Block className={`relative ${className || ""}`} style={{ width, height }}>
      <Image src={src} fill sizes="100%" alt="ユーザーアイコン" />
    </Block>
  );
};
