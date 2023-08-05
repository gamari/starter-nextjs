import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}

export const Textarea: FunctionComponent<Props> = ({
  text,
  setText,
  placeholder,
  className,
  rows = 16,
}) => {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className={`
        w-full 
        p-2
        resize-none outline-none border rounded-md  focus:border-gray-500 
        ${className}
      `}
      rows={rows}
      placeholder={placeholder}
    />
  );
};
