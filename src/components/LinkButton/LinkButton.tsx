import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";

import * as styles from "@/components/Button/Button.css";

export type LinkButtonProps = ComponentPropsWithoutRef<"a"> & LinkProps;

export const LinkButton = ({ className, ...props }: LinkButtonProps) => {
  return <Link {...props} className={clsx(styles.button, className)} />;
};
