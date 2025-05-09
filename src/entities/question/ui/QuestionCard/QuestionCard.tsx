import { JSX } from "react";

import { Accordion, Button, Flex, Icon, Text, TextHTML } from "@/shared";
import { IconChevron } from "@/shared/assets";

import styles from "./styles.module.css";

type QuestionProps = {
  answer: string,
  isExpandable?: boolean,
}

const QuestionCard = ( { answer, isExpandable = false }: QuestionProps ) => {
  return (
    <Flex direction="column" gap="20">
      <>
        {isExpandable ?
          <>
            <Text variant="body5-accent" color="black-800">Развёрнутый ответ</Text>
            <Accordion
              className={styles.item}
              minHeight={250}
              toggleSlot={( { isOpen, toggle } ): JSX.Element => (
                <Button
                  variant="button"
                  onClick={toggle}
                  suffix={<Icon
                    src={IconChevron as string}
                    size={20}
                    className={`${styles.icon} ${isOpen ? styles["accordion-opened"] : ''}`}
                  />}
                >
                  <Text variant="body2-accent" color="black-800">{isOpen ? "Свернуть" : "Развернуть"}</Text>
                </Button>
              )}
            >
              <TextHTML html={answer} color="black-800"/>
            </Accordion>
          </>
          :
          <>
            <Text variant="body5-accent" color="black-800">Краткий ответ</Text>
            <TextHTML html={answer} color="black-800"/>
          </>
        }
      </>
    </Flex>
  );
};

export default QuestionCard;