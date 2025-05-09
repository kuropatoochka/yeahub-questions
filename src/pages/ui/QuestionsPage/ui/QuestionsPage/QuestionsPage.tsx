import QuestionsPageContent from "@/pages/ui/QuestionsPage/ui/QuestionsPageContent/QuestionsPageContent.tsx";
import QuestionsPageFilter from "@/pages/ui/QuestionsPage/ui/QuestionsPageFilter/QuestionsPageFilter.tsx";

import styles from "./styles.module.css";

const QuestionsPage = () => {
  return (
    <main className={styles.main}>
      <QuestionsPageContent/>
      <QuestionsPageFilter/>
    </main>
  )
}

export default QuestionsPage