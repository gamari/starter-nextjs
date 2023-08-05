import React, { FunctionComponent } from "react";
import { Inline } from "../layout/Inline";

interface Props {
  className?: string;
  label: string;
  isFill?: boolean;
  onClick?: () => void;
}

export const Badge: FunctionComponent<Props> = ({
  label,
  className,
  isFill = true,
  onClick,
}) => {
  return (
    <Inline
      className={`
      min-w-max 
      px-3 py-1
      text-lg
      rounded-full border border-gray-500 cursor-pointer

      ${isFill ? "bg-gray-500 text-white" : "bg-gray-50 text-gray-600"}
      ${className}`}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {label}
    </Inline>
  );
};
