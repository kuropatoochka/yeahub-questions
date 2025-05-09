import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_API = import.meta.env.VITE_BASE_API

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  endpoints: () => ({}),
})

export default baseApi