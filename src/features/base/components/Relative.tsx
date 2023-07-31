import React, { FunctionComponent, ReactNode } from "react";
import { Block } from "./Block";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Relative: FunctionComponent<Props> = ({ children, className }) => {
  return <Block className={`relative ${className}`}>{children}</Block>;
};
