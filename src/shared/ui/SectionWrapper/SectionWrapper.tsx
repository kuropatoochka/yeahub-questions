import { ReactNode } from "react";

import { Flex } from "@/shared";

import styles from "./styles.module.css";

type Props = Partial<{
  children: ReactNode,
  className: string
}>

const SectionWrapper = ( { children, className }: Props ) => {
  return (
    <Flex direction="column" gap="24" className={`${styles.section} ${className}`}>
      {children}
    </Flex>
  );
};

export default SectionWrapper;