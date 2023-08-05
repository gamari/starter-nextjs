import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Overlay: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div className={`h-full w-full backdrop-brightness-90 ${className || ""}`}>
      {children}
    </div>
  );
};
