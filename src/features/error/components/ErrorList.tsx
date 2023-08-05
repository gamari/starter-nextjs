import React, { FunctionComponent } from "react";
import { Block } from "../../base/components/layout/Block";

interface Props {
  errors: string[];
}

export const ErrorList: FunctionComponent<Props> = ({ errors }) => {
  return (
    <Block className="flex flex-col space-y-1">
      {errors.map((error) => (
        <Block key={error} className="text-red-500">
          {error}
        </Block>
      ))}
    </Block>
  );
};
