import { ChangeEvent } from "react";

import { Flex } from "@/shared";

import { Magnifier } from "@gravity-ui/icons";

import styles from "./styles.module.css";

type InputProps = {
  onChange: ( newValue: string ) => void,
  value: string
}

const Input = ( { onChange, value }: InputProps ) => {
  const onHandleChange = ( e: ChangeEvent<HTMLInputElement> ) => onChange(e.target.value)

  return (
    <Flex gap="8" className={styles.input}>
      <span className={styles.input__icon}>
        <Magnifier/>
      </span>
      <input
        className={styles.input__field}
        value={value}
        onChange={onHandleChange}
      />
    </Flex>
  )
}

export default Input