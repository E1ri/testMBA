import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { item } from '../types/item'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-moscow-mba.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    getAllItems: builder.query<item[], void>({
      query: () => `products?_limit=5`,
    }),
  }),
})

export const { useGetAllItemsQuery } = itemsApi
