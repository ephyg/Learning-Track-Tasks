import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * API configuration for fetching products.
 */


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
