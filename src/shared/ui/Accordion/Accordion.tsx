import { JSX, ReactNode, useRef, useState } from "react";

import { Flex } from "@/shared";

import styles from './styles.module.css';

type AccordionProps = {
  toggleSlot: ( args: { isOpen: boolean, toggleOpen: () => void } ) => JSX.Element,
  minHeight?: number,
  className?: string,
  children: ReactNode,
}

const Accordion = ( { toggleSlot, minHeight = 0, className, children }: AccordionProps ) => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const toggleOpen = () => setIsOpen(prev => !prev)

  return (
    <Flex direction="column" className={`${className}`}>
      {toggleSlot({ isOpen, toggleOpen })}

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