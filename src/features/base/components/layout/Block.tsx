import React, { CSSProperties, FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const Block: FunctionComponent<Props> = ({
  children,
  className,
  style,
  onClick,
}) => {
  return (
    <div className={`${className || ""}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
