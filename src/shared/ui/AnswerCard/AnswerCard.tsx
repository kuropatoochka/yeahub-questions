import { JSX } from "react";

import { Accordion, Button, Flex, Icon, Text, TextHTML } from "@/shared";
import { IconChevron } from "@/shared/assets";

import styles from "./styles.module.css";

type AnswerProps = {
  answer: string,
  isExpandable?: boolean,
}

const AnswerCard = ( { answer, isExpandable = false }: AnswerProps ) => {
  return (
    <Flex direction="column" gap="20">
      <>
        {isExpandable ?
          <>
            <Text variant='body5-accent' color='black-800'>Развёрнутый ответ</Text>
            <Accordion
              className={styles.item}
              minHeight={250}
              toggleSlot={( { isOpen, toggleOpen } ): JSX.Element => (
                <Button
                  variant='button'
                  onClick={toggleOpen}
                  suffix={<Icon
                    src={IconChevron as string}
                    size={20}
                    className={`${styles.icon} ${isOpen ? styles["accordion-opened"] : ''}`}
                  />}
                >
                  <Text variant='body2-accent' color='black-800'>{isOpen ? "Свернуть" : "Развернуть"}</Text>
                </Button>
              )}
            >
              <TextHTML html={answer} color='black-800'/>
            </Accordion>
          </>
          :
          <>
            <Text variant='body5-accent' color='black-800'>Краткий ответ</Text>
            <TextHTML html={answer} color='black-800'/>
          </>
        }
      </>
    </Flex>
  );
};

export default AnswerCard;