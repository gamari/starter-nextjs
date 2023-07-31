import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Inline: FunctionComponent<Props> = ({ children, className }) => {
  return <span className={`${className || ""}`}>{children}</span>;
};
