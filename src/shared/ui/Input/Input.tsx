import * as React from "react";

import { Flex } from "@/shared";

import { Magnifier } from '@gravity-ui/icons';

import styles from './styles.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = ( { ...props }: InputProps ) => {

  return (
    <Flex gap="8" className={styles.input}>
      <span className={styles.input__icon}>
        <Magnifier/>
      </span>
      <input
        className={styles.input__field}
        {...props}
      />
    </Flex>
  )
}

export default Input