import React, { FunctionComponent } from "react";
import { FilledImage } from "./FilledImage";

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: FunctionComponent<Props> = ({
  className,
  width = 50,
  height = 50,
}) => {
  return (
    <FilledImage
      width={width}
      height={height}
      src="/images/logo.png"
      className={className}
    />
  );
};
