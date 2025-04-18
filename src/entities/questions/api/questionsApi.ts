import baseApi from "@/shared/api/baseApi.ts";

import { QuestionsResponse } from "../model/types.ts";
import { FiltersState } from "@/entities/filter/model/types.ts";
import { cleanQueryParams } from "@/entities/filter/helpers/cleanQueryParams.ts";

const questionsApi = baseApi.injectEndpoints?.({
  endpoints: ( builder ) => ({
    getAllQuestions: builder.query<QuestionsResponse, FiltersState>({
      query: ( filters ) => {
        const filteredParams = cleanQueryParams(filters)
        return {
          url: 'questions/public-questions',
          params: {
            ...filteredParams
          }
        }
      },
      providesTags: [ 'AllQuestions' ]
    })
  })
})

export const { useGetAllQuestionsQuery } = questionsApi