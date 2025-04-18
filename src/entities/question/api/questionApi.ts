import baseApi from "@/shared/api/baseApi.ts";
import { IQuestion } from "../model/types.ts";

const questionApi = baseApi.injectEndpoints?.({
  endpoints: ( builder ) => ({
    getQuestionById: builder.query<IQuestion, number>({
      query: ( id: number ) => {
        return {
          url: `questions/public-questions/${id}`,
        }
      },
    })
  })
})

export const { useGetQuestionByIdQuery } = questionApi