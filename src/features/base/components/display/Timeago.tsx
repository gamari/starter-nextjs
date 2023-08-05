import React, { FunctionComponent } from "react";
import { Inline } from "../layout/Inline";
import dayjs from "dayjs";

interface Props {
  time?: string;
}

export const Timeago: FunctionComponent<Props> = ({ time }) => {
  if (!time) return null;

  return <Inline>{dayjs(time).format("YYYY年M月DD日 h:m")}</Inline>;
};
