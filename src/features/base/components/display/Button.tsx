import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  label: string;
  onClick?: () => void;
  color?: "gray" | "red" | "blue" | "black";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "md" | "lg" | "full";
  isFull?: boolean;
}

export const Button: FunctionComponent<Props> = ({
  className,
  label,
  onClick,
  color = "gray",
  disabled = false,
  rounded = "md",
  isFull = false,
  size = "md",
}) => {
  return (
    <button
      className={`
        text-white
        disabled:opacity-50
        ${size == "sm" && "text-sm px-2 py-1"}
        ${size == "md" && "text-md px-3 py-2"}
        ${size == "lg" && "text-lg px-4 py-3"}
        ${rounded == "none" && "rounded-none"}
        ${rounded == "md" && "rounded-md"}
        ${rounded == "lg" && "rounded-lg"}
        ${rounded == "full" && "rounded-full"}
        ${color == "gray" && "bg-gray-500"}
        ${color == "red" && "bg-red-500"}
        ${color == "blue" && "bg-blue-500"}
        ${color == "black" && "bg-black"}
        ${isFull ? "w-full" : "min-w-fit"}
        ${className}
      `}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
