import baseApi from "@/shared/api/baseApi.ts";
import { IQuestion, QuestionsResponse } from "@/entities/question/model/types.ts";
import { FiltersState } from "@/entities/filter/model/types.ts";
import { cleanQueryParams } from "@/entities/filter/helpers/cleanQueryParams.ts";

const questionApi = baseApi.injectEndpoints?.({
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
      }
    }),
    getQuestionById: builder.query<IQuestion, number>({
      query: ( id: number ) => {
        return {
          url: `questions/public-questions/${id}`,
        }
      },
    })
  })
})

export const { useGetAllQuestionsQuery, useGetQuestionByIdQuery } = questionApi