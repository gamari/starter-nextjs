import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Aside: FunctionComponent<Props> = ({ children, className }) => {
  return <aside className={`${className || className}`}>{children}</aside>;
};
