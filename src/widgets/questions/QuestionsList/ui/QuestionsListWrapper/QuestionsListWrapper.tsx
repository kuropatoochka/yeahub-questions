import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { QuestionsHeader, QuestionsList } from "@/widgets/questions/QuestionsList";
import { SectionWrapper } from "@/shared";

import { convertFiltersToSearchParams } from "@/shared/libs/utils/helpers/convertFiltersToSearchParams.ts";
import { parseSearchParamsToFilters } from "@/shared/libs/utils/helpers/parseSearchParamsToFilters.ts";

import { useGetAllQuestionsQuery } from "@/entities/questions/api/questionsApi.ts";
import { setFilters } from "@/entities/filter/slice/filterSlice.ts";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import styles from "./styles.module.css";

const QuestionsListWrapper = () => {
  const dispatch = useAppDispatch();
  const [ searchParams, setSearchParams ] = useSearchParams()
  const filters = useAppSelector(state => state.filters)


  useEffect(() => {
    const parsed = parseSearchParamsToFilters(searchParams);
    dispatch(setFilters(parsed));
  }, []);

  useEffect(() => {
    const newParams = convertFiltersToSearchParams(filters);
    setSearchParams(newParams);
  }, [ filters ]);

  const { data: questionsResponse } = useGetAllQuestionsQuery(filters);

  if (!questionsResponse) return null;

  return (
    <SectionWrapper className={styles.questions__section}>
      <QuestionsHeader/>
      <QuestionsList
        questions={questionsResponse.data}
        total={questionsResponse.total}
        page={questionsResponse.page}
      />
    </SectionWrapper>
  );
};

export default QuestionsListWrapper;