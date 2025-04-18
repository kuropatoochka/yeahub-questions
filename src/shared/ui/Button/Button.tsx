import { ElementType } from "react";

import { ButtonProps } from "@/shared/model/types.ts";
import { getTagName } from "@/shared/libs/utils/helpers/getButtonTagName.ts";

import styles from "./styles.module.css";

const Button = ( { variant, size = 'medium', children, suffix, className, ...props }: ButtonProps ) => {
  const tagName = getTagName(variant)
  const Component = tagName as ElementType

  const classes = [
    styles[tagName],
    styles[`${tagName}-${size}`],
    styles[`${tagName}-${variant}`],
    className,
    props.disabled ? styles.disabled : ''
  ].filter(Boolean).join(' ');

  return (
    <Component
      className={classes}
      {...props}
    >
      {children}
      {suffix}
    </Component>
  );
};

export default Button;