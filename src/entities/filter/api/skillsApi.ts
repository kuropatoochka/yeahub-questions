import { SkillsParams, SkillsResponse } from "../model/types.ts";
import baseApi from "@/shared/api/baseApi.ts";

const skillsApi = baseApi.injectEndpoints?.({
  endpoints: ( builder ) => ({
    getSkills: builder.query<SkillsResponse, SkillsParams>({
      query: ( { limit = 10, specializations } ) => ({
        url: 'skills',
        params: {
          limit,
          specializations,
        }
      }),
      providesTags: [ 'Skills' ]
    })
  })
})

export const { useGetSkillsQuery } = skillsApi