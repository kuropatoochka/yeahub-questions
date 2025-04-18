import React, { useMemo } from "react";

import { Pagination } from "@/shared";

import { EmptyList, QuestionsItem } from "@/widgets/questions/QuestionsList";
import { usePagination } from "@/shared/libs/utils/hooks/usePagination.ts";

import { IQuestion } from "@/entities/question/model/types.ts";

import styles from "./styles.module.css";

type Props = {
  questions: IQuestion[],
  total: number,
  page: number,
}

const QuestionsList = React.memo(( { questions, total, page }: Props ) => {

  const totalPages = useMemo(() => Math.ceil((total || 0) / 10), [ total ])

  const {
    handlePageClick,
    handlePrevPageClick,
    handleNextPageClick
  } = usePagination(page, totalPages)

  if (questions.length === 0) {
    return (
      <EmptyList/>
    )
  }

  return (
    <>
      {questions.map(( question ) =>
        <QuestionsItem key={question.id} question={question}/>
      )}

      <Pagination
        className={styles.pagination__wrapper}
        totalPages={totalPages}
        page={page}
        onChangePage={handlePageClick}
        onPrevPageClick={handlePrevPageClick}
        onNextPageClick={handleNextPageClick}
      />
    </>
  );
})

export default QuestionsList;