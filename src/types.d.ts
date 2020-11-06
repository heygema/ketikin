import { ReactElement } from "react";

export type Props = {
  children: (value: string) => ReactElement;
  text?: string;
  texts?: string[];
  interval?: number;
};

export default function Ketikin(props: Props): ReactElement;
