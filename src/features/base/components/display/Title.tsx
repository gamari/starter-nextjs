import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4";
  bold?: "normal" | "bold" | "extrabold";
}

export const Title: FunctionComponent<Props> = ({
  children,
  className,
  type = "h3",
  bold = "normal",
}) => {
  const boldClasses = `
    ${bold == "normal" && "font-normal"}
    ${bold == "bold" && "font-bold"}
    ${bold == "extrabold" && "font-extrabold"}
  `;

  if (type == "h1")
    return (
      <h1 className={`text-4xl ${boldClasses} ${className}`}>{children}</h1>
    );

  if (type == "h2")
    return (
      <h2 className={`text-xl ${boldClasses} ${className}`}>{children}</h2>
    );

  if (type == "h4")
    return <h4 className={`text-sm ${boldClasses}`}>{children}</h4>;

  return <h3 className={`${boldClasses} ${className}`}>{children}</h3>;
};
