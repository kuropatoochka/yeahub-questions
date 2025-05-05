import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import { EmptyList, QuestionsItem } from "@/widgets/questions/QuestionsList";
import { useGetAllQuestionsQuery } from "@/entities/question/api/questionApi.ts";
import { setFilters } from "@/entities/filter/slice/filterSlice.ts";

import { Pagination } from "@/shared";

import { usePagination } from "@/shared/libs/utils/hooks/usePagination.ts";

import styles from "./styles.module.css";

import { parseSearchParamsToFilters } from "@/shared/libs/utils/helpers/parseSearchParamsToFilters.ts";
import { convertFiltersToSearchParams } from "@/shared/libs/utils/helpers/convertFiltersToSearchParams.ts";

const QuestionsList = () => {
  const dispatch = useAppDispatch()
  const [ searchParams, setSearchParams ] = useSearchParams()
  const filters = useAppSelector(state => state.filters)

  const { data: questionsResponse } = useGetAllQuestionsQuery(filters)

  const {
    data: questions = [],
    page = 1,
    total = 0
  } = questionsResponse ?? {};

  const totalPages = Math.ceil((total || 0) / 10)

  const {
    handlePageClick,
    handlePrevPageClick,
    handleNextPageClick
  } = usePagination(page, totalPages)

  useEffect(() => {
    const parsed = parseSearchParamsToFilters(searchParams)
    dispatch(setFilters(parsed))
  }, [])

  useEffect(() => {
    const newParams = convertFiltersToSearchParams(filters)
    setSearchParams(newParams)
  }, [ filters ])

  if (questions.length === 0) {
    return <EmptyList/>
  }

  console.log("list render")

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
}

export default QuestionsList;