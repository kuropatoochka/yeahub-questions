import { useMemo } from "react";
import { useAppSelector } from "@/app/appStore.ts";

import { QuestionsList } from "@/widgets/questions/QuestionsList";
import { QuestionsPagination } from "@/features/question/QuestionsPagination";

import { useGetAllQuestionsQuery } from "@/entities/question/api/questionApi.ts";
import { filter } from "@/entities/question/model/selectors.ts";

const QuestionsListWithPagination = () => {
  const filters = useAppSelector(filter)
  const { data, isLoading, error } = useGetAllQuestionsQuery(filters)

  const totalPages = useMemo(() => {
    return Math.ceil((data?.total || 1) / 10);
  }, [ data?.total ]);

  if (isLoading) return <p>Загрузка</p>
  if (error) return <p>Ошибка {error}</p>

  return (
    <>
      {data.data &&
        <>
          <QuestionsList questions={data.data}/>
          <QuestionsPagination page={data.page} totalPages={totalPages}/>
        </>
      }
    </>
  );
};

export default QuestionsListWithPagination;