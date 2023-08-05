import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  className?: string;
}

export const ResizableTextarea: FunctionComponent<Props> = ({
  text,
  setText,
  placeholder,
  className,
}) => {
  return (
    <textarea
      tabIndex={0}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      className={`
            w-full 
            mb-3 
            text-lg whitespace-pre-wrap 
            outline-none 
            resize-none 
            ${className}
        `}
    />
  );
};
