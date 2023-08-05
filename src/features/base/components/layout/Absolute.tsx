import React, { FunctionComponent, ReactNode } from "react";
import { Block } from "./Block";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Absolute: FunctionComponent<Props> = ({ children, className }) => {
  return <Block className={`absolute ${className}`}>{children}</Block>;
};
