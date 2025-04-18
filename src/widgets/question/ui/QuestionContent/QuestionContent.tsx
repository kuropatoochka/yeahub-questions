import { QuestionHeader } from "@/entities/question";
import { AnswerCard, Flex, SectionWrapper } from "@/shared";

import styles from "./styles.module.css";

type Props = {
  image: string | null,
  title: string,
  description: string,
  shortAnswer: string,
  longAnswer: string,
}

const QuestionContent = ( { image, title, description, shortAnswer, longAnswer }: Props ) => {
  return (
    <Flex direction="column" gap="20">
      <SectionWrapper className={styles.question__section}>
        <QuestionHeader image={image} title={title} description={description}/>
      </SectionWrapper>

      <SectionWrapper className={styles.question__section}>
        <AnswerCard answer={shortAnswer}/>
      </SectionWrapper>

      <SectionWrapper className={styles.question__section}>
        <AnswerCard answer={longAnswer} isExpandable={true}/>
      </SectionWrapper>
    </Flex>
  );
};

export default QuestionContent;