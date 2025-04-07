import styles from './styles.module.css'
import { Magnifier } from '@gravity-ui/icons'
import * as React from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...props}: Props) => {

  return (
    <div className={styles.input}>
      <span className={styles.input__icon}>
        <Magnifier/>
      </span>
      <input
        className={styles.input__field}
        {...props}
      />
    </div>
  )
}

export default Input