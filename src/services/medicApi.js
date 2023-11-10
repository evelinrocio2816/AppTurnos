import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const medicApi = createApi({
  reducerPath: "medicApi",
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
    getOrders: builder.query({
      query: () => `order.json`,
    }),
    postOrder:builder.mutation({
      query:({...order})=>({
        url: 'orders.json',
        method:'POST',
        body:order,
      })
    }),
    getProfileImage: builder.query({
      query: localId => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body: {
          image: image,
        },
      }),
    }),
  }),
});
export const {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetCategoriesQuery,
  useGetMedicsQuery,
  useGetMedicsByCategoryQuery,
  usePostOrderMutation,
  useGetOrdersQuery,
} = medicApi;
