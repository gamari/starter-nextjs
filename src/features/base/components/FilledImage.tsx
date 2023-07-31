import React, { FunctionComponent } from "react";
import Image from "next/image";

import { Block } from "./Block";

interface Props {
  width?: number;
  height?: number;
  src: string;
}

export const FilledImage: FunctionComponent<Props> = ({
  width = 100,
  height = 100,
  src,
}) => {
  return (
    <Block className="relative" style={{ width, height }}>
      <Image src={src} fill sizes="100%" alt="ユーザーアイコン" />
    </Block>
  );
};
