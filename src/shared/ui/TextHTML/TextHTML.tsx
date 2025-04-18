import DOMPurify from "dompurify";

import { Text } from "@/shared";

import { Palette, TextVariant } from "@/shared/model/types.ts";

import styles from "./styles.module.css";

interface Props {
  html: string;
  variant?: TextVariant,
  color?: Palette,
}

const TextHTML = ( { html, variant = 'body3-accent', color = 'black-700' }: Props ) => {
  return (
    <pre className={styles.htmlText}>
      <Text variant={variant} color={color}>
        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}/>
      </Text>
    </pre>
  );
};
export default TextHTML;