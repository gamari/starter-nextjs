import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4";
}

export const Title: FunctionComponent<Props> = ({
  children,
  className,
  type = "h3",
}) => {
  if (type == "h1")
    return <h1 className={`font-bold text-5xl ${className}`}>{children}</h1>;

  if (type == "h2")
    return <h2 className={`font-bold text-3xl ${className}`}>{children}</h2>;

  if (type == "h4") return <h4 className="text-sm">{children}</h4>;

  return <h3 className={`font-bold ${className}`}>{children}</h3>;
};
