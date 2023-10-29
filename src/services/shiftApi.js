import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const shiftApi = createApi({
  reducerPath: "shiftApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getMedics: builder.query({
      query: () => "medics.json",
    }),
    getMedicsByCategory: builder.query({
      query: category =>
        `medics.json?orderBy="category"&eqaulTo="${category}"`,
    }),
  }),
});
export const {
  useGetCategoriesQuery,
  useGetMedicsQuery,
  useGetMedicsByCategoryQuery,
} = shiftApi;
