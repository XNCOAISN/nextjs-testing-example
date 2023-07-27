import { ComponentPropsWithRef, forwardRef } from "react";

export type ButtonProps = ComponentPropsWithRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button {...props} ref={ref} />;
  }
);

Button.displayName = "Button";
