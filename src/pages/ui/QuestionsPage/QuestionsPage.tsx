import { QuestionsFilters } from "@/widgets/questions/QuestionsFilters";

import { QuestionsHeader, QuestionsList } from "@/widgets/questions/QuestionsList";
import { SectionWrapper } from "@/shared";

import styles from "./styles.module.css";

const QuestionsPage = () => {
  return (
    <main className={styles.main}>
      <SectionWrapper className={styles.questions__section}>
        <QuestionsHeader/>
        <QuestionsList/>
      </SectionWrapper>
      <QuestionsFilters/>
    </main>
  )
}

export default QuestionsPage