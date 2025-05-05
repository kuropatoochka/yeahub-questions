import { JSX, ReactNode, useRef } from "react";

import { Flex } from "@/shared";
import { useToggle } from "@/shared/libs/utils/hooks/useToggle.ts";

import styles from "./styles.module.css";

type AccordionProps = {
  toggleSlot: ( args: { isOpen: boolean, toggle: () => void } ) => JSX.Element,
  minHeight?: number,
  className?: string,
  children: ReactNode,
}

const Accordion = ( { toggleSlot, minHeight = 0, className, children }: AccordionProps ) => {
  const contentRef = useRef<HTMLDivElement | null>(null)

  const [ isOpen, toggle ] = useToggle()

  return (
    <Flex direction="column" className={`${className}`}>
      {toggleSlot({ isOpen, toggle })}
      <Flex
        ref={contentRef}
        className={styles.content__wrapper}
        style={{ height: isOpen ? contentRef.current?.scrollHeight : minHeight }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Accordion;