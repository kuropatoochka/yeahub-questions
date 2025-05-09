import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import { QuestionsFilters } from "@/widgets/questions/QuestionsFilters";
import { parseSearchParamsToFilters } from "@/shared/libs/utils/helpers/parseSearchParamsToFilters.ts";
import { convertFiltersToSearchParams } from "@/shared/libs/utils/helpers/convertFiltersToSearchParams.ts";

import { filter } from "@/entities/question/model/selectors.ts";
import { setFilters } from "@/entities/filter/slice/filterSlice.ts";

const QuestionsPageFilter = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(filter)
  const [ searchParams, setSearchParams ] = useSearchParams()

  useEffect(() => {
    const parsed = parseSearchParamsToFilters(searchParams)
    dispatch(setFilters(parsed))
  }, [])

  useEffect(() => {
    const newParams = convertFiltersToSearchParams(filters)
    setSearchParams(newParams)
  }, [ filters ])

  return (
    <QuestionsFilters/>
  );
};

export default QuestionsPageFilter;