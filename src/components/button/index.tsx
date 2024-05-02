"use client";

import cs from "classnames";
import { Button as ButtonNextUI } from "@nextui-org/react";

import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const { isSecondary, label, onClick, animate } = props;

  return (
    <div className="flex group min-w-[120px] items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      <span
        className={cs({
          "absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#4776E6_50%,#F54180_100%)]":
            true,
          "animate-[spin_3s_linear_infinite]": animate,
        })}
      />
      <ButtonNextUI
        onClick={onClick}
        className={cs({
          "font-bold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full transition-background px-3 py-1 text-lg backdrop-blur-3xl  bg-transparent text-white":
            true,
          "bg-background text-foreground": isSecondary,
        })}
      >
        {label}
      </ButtonNextUI>
    </div>
  );
}

export default Button;
