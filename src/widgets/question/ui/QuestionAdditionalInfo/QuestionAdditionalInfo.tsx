import { QuestionAuthor, QuestionGradeList, QuestionHashtagList } from "@/entities/question";
import { FilterList } from "@/entities/filter";
import { Flex, SectionWrapper, Text } from "@/shared";

import { ISkills } from "@/entities/filter/model/types.ts";

import styles from "./styles.module.css";

type Props = {
  rate: number,
  complexity: number,
  hashtags: string[],
  author: string,
  skills: ISkills[]
}

const QuestionAdditionalInfo = ( { rate, complexity, hashtags, author, skills }: Props ) => {

  return (
    <Flex direction="column" gap="30" align="center">
      <SectionWrapper>
        <Flex direction="column" gap="8">
          <Text variant="body3-accent" color="black-700">{"Уровень:"}</Text>
          <QuestionGradeList rate={rate} complexity={complexity} className={styles.list}/>
        </Flex>

        <FilterList
          title="Навыки:"
          items={skills}
          isDisplayOnly={true}
        />

        <Flex direction="column" gap="8">
          <Text variant="body3-accent" color="black-700">{"Ключевые слова:"}</Text>
          <QuestionHashtagList hashtags={hashtags}/>
        </Flex>
      </SectionWrapper>

      <QuestionAuthor author={author}/>
    </Flex>
  );
};

export default QuestionAdditionalInfo;