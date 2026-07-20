
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import products from "@/data/product-data";

// Local static product API – no backend required
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Products", "Product", "RelatedProducts", "ProductType", "OfferProducts", "PopularProducts", "TopRatedProducts"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      queryFn: () => ({ data: { data: products } }),
      providesTags: ["Products"],
    }),
    getProductType: builder.query({
      queryFn: ({ type, query }) => {
        let result = products;
        if (type && type !== "beauty") {
          result = products.filter((p) => p.parent.toLowerCase() === type.toLowerCase());
        }
        if (query && query.includes("topSellers=true")) {
          result = result.filter((p) => p.topSellers);
        }
        return { data: { data: result } };
      },
      providesTags: ["ProductType"],
    }),
    getOfferProducts: builder.query({
      queryFn: () => ({ data: { data: products.filter((p) => p.discount > 0) } }),
      providesTags: ["OfferProducts"],
    }),
    getPopularProductByType: builder.query({
      queryFn: () => {
        const sorted = [...products].sort((a, b) => b.sellCount - a.sellCount).slice(0, 8);
        return { data: { data: sorted } };
      },
      providesTags: ["PopularProducts"],
    }),
    getTopRatedProducts: builder.query({
      queryFn: () => {
        const sorted = [...products].sort((a, b) => b.sellCount - a.sellCount).slice(0, 8);
        return { data: { data: sorted } };
      },
      providesTags: ["TopRatedProducts"],
    }),
    getProduct: builder.query({
      queryFn: (id) => {
        const product = products.find((p) => p._id === id) || null;
        return { data: { data: product } };
      },
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
    }),
    getRelatedProducts: builder.query({
      queryFn: (id) => {
        const product = products.find((p) => p._id === id);
        const related = product
          ? products.filter((p) => p.parent === product.parent && p._id !== id).slice(0, 4)
          : [];
        return { data: { data: related } };
      },
      providesTags: (result, error, arg) => [{ type: "RelatedProducts", id: arg }],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductTypeQuery,
  useGetOfferProductsQuery,
  useGetPopularProductByTypeQuery,
  useGetTopRatedProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
