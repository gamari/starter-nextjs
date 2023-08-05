import React, { FunctionComponent } from "react";
import { Block } from "../layout/Block";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card: FunctionComponent<Props> = ({ className, children }) => {
  return (
    <Block
      className={`
      bg-white
        md:shadow
        md:rounded-lg  
        ${className || ""}`}
    >
      {children}
    </Block>
  );
};
