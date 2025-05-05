import baseApi from "@/shared/api/baseApi.ts";
import { ISpecializations, SpecializationsResponse } from "@/entities/specialization/model/types.ts";

const specializationsApi = baseApi.injectEndpoints?.({
  endpoints: ( builder ) => ({
    getSpecializations: builder.query<SpecializationsResponse, number>({
        query: ( limit = 5 ) => ({
          url: 'specializations',
          params: {
            limit
          },
        }),
        providesTags: [ 'Specializations' ]
      },
    ),
    getSpecializationById: builder.query<ISpecializations[], number>({
      query: ( id: number ) => {
        return {
          url: `specializations/${id}`,
        }
      },
    }),
  }),
})

export const { useGetSpecializationsQuery, useGetSpecializationByIdQuery } = specializationsApi