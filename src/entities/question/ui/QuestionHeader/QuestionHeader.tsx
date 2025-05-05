import { Flex, Text } from "@/shared";
import { ImgDefault } from "@/shared/assets";

import styles from "./styles.module.css";

type Props = {
  image: string | null,
  title: string,
  description: string,
}

const QuestionHeader = ( { image, title, description }: Props ) => {
  return (
    <Flex gap="10">
      <img
        className={styles.image}
        src={image ? image : (ImgDefault as string)}
        alt="question"
      />
      <Flex direction="column" gap="8">
        <Text variant='body6' color='black-800'>{title}</Text>
        <Text variant='body3-accent' color='black-700'>{description}</Text>
      </Flex>
    </Flex>
  );
};

export default QuestionHeader;