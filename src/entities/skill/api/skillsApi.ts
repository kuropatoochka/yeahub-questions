import baseApi from "@/shared/api/baseApi.ts";
import { SkillsParams, SkillsResponse } from "@/entities/skill/model/types.ts";

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