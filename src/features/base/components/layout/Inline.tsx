import React, { FunctionComponent } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Inline: FunctionComponent<Props> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <span className={`${className || ""}`} onClick={onClick}>
      {children}
    </span>
  );
};
