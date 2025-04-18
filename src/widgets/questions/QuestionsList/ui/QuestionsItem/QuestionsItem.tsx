import { JSX } from "react";
import { useNavigate } from "react-router-dom";

import { QuestionGradeList } from "@/entities/question";
import { Accordion, Button, Flex, Icon, Text, TextHTML } from "@/shared";
import { IconArrowRight, IconChevron } from "@/shared/assets";

import { IQuestion } from "@/entities/question/model/types.ts";

import styles from './styles.module.css';

type Props = {
  question: IQuestion
}

const QuestionsItem = ( { question }: Props ) => {
  const { id, title, complexity = 0, rate, shortAnswer } = question;

  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate(`/questions/${id}`)
  }

  return (
    <Accordion
      className={styles.item}
      toggleSlot={( { isOpen, toggleOpen } ): JSX.Element => (
        <Button
          variant='button'
          className={styles.button}
          onClick={toggleOpen}
          suffix={<Icon
            src={IconChevron as string}
            size={24}
            className={`${styles.icon} ${isOpen ? styles['accordion-opened'] : ''}`}
          />}
        >
          <Text variant='body5-accent' color='black-900' className={styles.title}>{title}</Text>
        </Button>
      )}
    >

      <Flex direction="column" gap="24" maxWidth className={styles.article}>
        <QuestionGradeList rate={rate} complexity={complexity}/>

        <TextHTML html={shortAnswer}/>

        <Button
          variant='link'
          size='large'
          className={styles.link}
          suffix={<Icon size={24} src={IconArrowRight as string}/>}
          onClick={handleButtonClick}
        >
          Подробнее
        </Button>
      </Flex>

    </Accordion>
  )
}

export default QuestionsItem;