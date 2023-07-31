import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  label: string;
  onClick?: () => void;
  color?: "gray" | "red" | "blue";
  disabled?: boolean;
}

export const Button: FunctionComponent<Props> = ({
  className,
  label,
  onClick,
  color = "gray",
  disabled = false,
}) => {
  return (
    <button
      className={`
        min-w-fit 
        px-3 py-2 
        text-white
        rounded-lg
        disabled:opacity-50
        ${color == "gray" && "bg-gray-500"}
        ${color == "red" && "bg-red-500"}
        ${color == "blue" && "bg-blue-500"}
        ${className}
      `}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
