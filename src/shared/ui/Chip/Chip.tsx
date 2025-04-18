import { JSX, ReactNode } from "react";

import { Flex } from "@/shared";

import styles from './styles.module.css';

type Props = {
  active: boolean,
  children: ReactNode,
  onClick: () => void,
  prefix?: JSX.Element,
}

const Chip = ( { active, children, onClick, prefix }: Props ) => {
  return (
    <Flex
      align="center" gap="8"
      className={`${styles.button} ${active && styles.active}`}
      onClick={onClick}
    >
      {prefix}
      {children}
    </Flex>
  );
};

export default Chip;