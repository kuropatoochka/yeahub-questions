import { useNavigate, useParams } from "react-router-dom";

import { QuestionAdditionalInfo, QuestionContent } from "@/widgets/question";

import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi.ts";
import { IQuestion } from "@/entities/question/model/types.ts";

import { Button, Flex } from "@/shared";

import styles from "./styles.module.css";

const QuestionPage = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const { data: question } = useGetQuestionByIdQuery(id)

  const {
    title,
    complexity,
    rate,
    shortAnswer,
    keywords,
    longAnswer,
    createdBy,
    description,
    imageSrc,
    questionSkills
  } = question ?? {} as IQuestion

  if (!question) return (
    <Flex direction='column' gap='10'>
      Вопрос не найден
      <Button variant='link' onClick={() => navigate(-1)}>Назад</Button>
    </Flex>
  )

  return (
    <main className={styles.main}>
      {question && <>
        <QuestionContent
          image={imageSrc}
          title={title}
          description={description}
          shortAnswer={shortAnswer}
          longAnswer={longAnswer}
        />
        <QuestionAdditionalInfo
          rate={rate}
          complexity={complexity}
          hashtags={keywords}
          author={createdBy.username}
          skills={questionSkills}
        />
      </>
      }
    </main>
  );
};

export default QuestionPage;