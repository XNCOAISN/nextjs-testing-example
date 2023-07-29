import { clsx } from "clsx";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import * as styles from "@/components/Button/Button.css";

export type LinkButtonProps = ComponentPropsWithoutRef<typeof Link>;

export const LinkButton = ({ className, ...props }: LinkButtonProps) => {
  return <Link {...props} className={clsx(styles.button, className)} />;
};
