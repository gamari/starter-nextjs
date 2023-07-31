import React, { FunctionComponent } from "react";
import { Block } from "./Block";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Center: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <Block className={`flex items-center justify-center ${className || ""}`}>
      {children}
    </Block>
  );
};
