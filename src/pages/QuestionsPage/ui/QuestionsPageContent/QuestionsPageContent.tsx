import { QuestionsHeader } from "@/widgets/questions/QuestionsHeader";
import { QuestionsListWithPagination } from "@/widgets/questions/QuestionsListWithPagination";
import { SectionWrapper } from "@/shared";

import styles from "./styles.module.css";

const QuestionsPageContent = () => {
  return (
    <SectionWrapper className={styles.questions__section}>
      <QuestionsHeader/>
      <QuestionsListWithPagination/>
    </SectionWrapper>
  );
};

export default QuestionsPageContent;