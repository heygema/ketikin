import { ReactNode } from "react";

export type Props = {
  children: (value: string) => ReactNode;
  text: string;
  texts?: string[];
  interval?: number;
};

export default function Ketikin(props: Props): React.ReactNode;
