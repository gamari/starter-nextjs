import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Main: FunctionComponent<Props> = ({ children, className }) => {
  return <main className={`${className || ""}`}>{children}</main>;
};
