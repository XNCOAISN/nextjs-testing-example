import { clsx } from "clsx";
import { ComponentPropsWithRef, forwardRef } from "react";

import * as styles from "./Input.css";

export type InputProps = ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input {...props} ref={ref} className={clsx(styles.input, className)} />
    );
  }
);

Input.displayName = "Input";
