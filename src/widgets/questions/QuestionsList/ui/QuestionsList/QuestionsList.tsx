import { EmptyList, QuestionsItem } from "@/widgets/questions/QuestionsList";
import { IQuestion } from "@/entities/question/model/types.ts";

type Props = {
  questions: IQuestion[]
}

const QuestionsList = ( { questions }: Props ) => {
  if (questions.length === 0) {
    return <EmptyList/>
  }

  // console.log("QuestionsList render")
  return (
    <>
      {questions.map(( question: IQuestion ) =>
        <QuestionsItem key={question.id} question={question}/>
      )}
    </>
  );
}

export default QuestionsList;