import { ReactNode } from "react";
import styles from "./Text.module.scss";
import { clsx } from "clsx";

type BaseProps = React.ComponentPropsWithRef<"p">;
export type TextSize = "s" | "m" | "l";
export type TextProps = {
  children: ReactNode;
  strong?: boolean;
  size?: TextSize;
} & BaseProps;

function getTextSizeClassName(size: TextProps["size"]) {
  switch (size) {
    case "s":
      return styles.text_size_s;
    case "l":
      return styles.text_size_l;
  }
}

export function Text({ children, size, strong, ...rest }: TextProps) {
  return (
    <p
      className={clsx(
        styles.text,
        getTextSizeClassName(size),
        strong && styles.text_bold
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
