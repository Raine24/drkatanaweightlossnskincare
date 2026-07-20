
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import categories from "@/data/category-data";
import products from "@/data/product-data";

// Local static category API – no backend required
export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      queryFn: () => ({ data: {} }),
    }),
    getShowCategory: builder.query({
      queryFn: () => {
        // Enrich each category with its actual product objects
        const enriched = categories.map((cat) => ({
          ...cat,
          products: products.filter((p) => cat.products.includes(p._id)),
        }));
        return { data: { result: enriched } };
      },
      providesTags: ["Categories"],
    }),
    getProductTypeCategory: builder.query({
      queryFn: () => {
        const enriched = categories.map((cat) => ({
          ...cat,
          products: products.filter((p) => cat.products.includes(p._id)),
        }));
        return { data: { result: enriched } };
      },
      providesTags: ["Categories"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetProductTypeCategoryQuery,
  useGetShowCategoryQuery,
} = categoryApi;
