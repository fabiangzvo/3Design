import { ReactEventHandler } from "react";

export interface ButtonProps {
  label: string;
  onClick: ReactEventHandler<HTMLButtonElement>;
  isSecondary?: boolean;
  animate?: boolean;
}
