import React, { FunctionComponent } from "react";
import { Block } from "./Block";

interface Props {
  errors: string[];
}

export const Errors: FunctionComponent<Props> = ({ errors }) => {
  return (
    <Block className="flex flex-col space-y-1">
      {errors.map((error, index) => (
        <Block key={`error${index}`} className="text-red-500">
          {error}
        </Block>
      ))}
    </Block>
  );
};
