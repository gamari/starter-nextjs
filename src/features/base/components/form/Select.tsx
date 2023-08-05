import React, { FunctionComponent } from "react";

interface Props {
  options: { value: string; label: string }[];
  value?: string;
  onSelect: (value: string) => void;
  className?: string;
}

export const Select: FunctionComponent<Props> = ({
  value,
  onSelect,
  options,
  className,
}) => {
  return (
    <select
      onChange={(e) => {
        const selectedCategoryId = e.target.value;
        onSelect(selectedCategoryId);
      }}
      className={`
        p-2 rounded-md border cursor-pointer w-[200px]
        ${className || ""}
      `}
      value={value}
    >
      <option value={""} selected={!value}></option>
      {options?.map(({ value: valueItem, label }) => (
        <option key={valueItem} value={valueItem} selected={valueItem == value}>
          {label}
        </option>
      ))}
    </select>
  );
};
