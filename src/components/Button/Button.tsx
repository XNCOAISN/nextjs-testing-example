import { ComponentPropsWithRef, forwardRef } from "react";

import * as styles from "./Button.css";

export type ButtonProps = ComponentPropsWithRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return <button {...props} ref={ref} className={styles.button} />;
  }
);

Button.displayName = "Button";
