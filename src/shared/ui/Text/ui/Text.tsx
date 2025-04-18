import { JSX, ReactNode } from "react";

import { Palette, TextVariant } from "@/shared/model/types.ts";

import styles from './styles.module.css';

type TextProps = {
  variant?: TextVariant,
  color?: Palette,
  className?: string,
  children: ReactNode,
}

const variantTag: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  'body2-accent': 'p',
  'body2-strong': 'p',
  'body3': 'p',
  'body3-accent': 'p',
  'body5-accent': 'p',
  'body6': 'p',
}

const Text = ( { variant, color, className, children }: TextProps ) => {
  const Tag = variantTag[variant]

  return (
    <Tag className={`${styles[variant]} ${styles[color]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Text;