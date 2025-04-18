import { QuestionsListWrapper } from "@/widgets/questions/QuestionsList";
import { QuestionsFilters } from "@/widgets/questions/QuestionsFilters";

import styles from './styles.module.css';

const QuestionsPage = () => {
  return (
    <main className={styles.main}>
      <QuestionsListWrapper/>

      <QuestionsFilters/>
    </main>
  )
}

export default QuestionsPage