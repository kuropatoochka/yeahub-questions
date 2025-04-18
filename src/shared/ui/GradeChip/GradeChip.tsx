import { Flex, Text } from "@/shared";

import styles from "./styles.module.css";

type Props = {
  label: string,
  value: number,
}

const GradeChip = ( { label, value }: Props ) => {
  return (
    <Flex align="center" gap="12" className={styles.param}>
      <Text variant="body2-strong" color="black-800">{label}:</Text>
      <Text variant="body2-strong" color="white-900" className={styles.value}>{value}</Text>
    </Flex>
  );
};

export default GradeChip;