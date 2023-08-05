import React, { FunctionComponent } from "react";

interface Props {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  label: string;
  className?: string;
  size?: "sm" | "lg";
}

export const TweetButton: FunctionComponent<Props> = ({
  className,
  onClick,
  disabled = false,
  label,
  size = "lg",
}) => {
  return (
    <button
      className={`
        ${size === "sm" && "w-24"}
        ${size == "lg" && "py-3 px-4 text-lg"}
        shadow
        rounded-full 
        bg-sky-500/95 
        text-white font-bold 
        hover:opacity-90 disabled:opacity-50
        transition duration-200
        ${className || ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
