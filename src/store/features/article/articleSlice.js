import { apiSlice } from "@/store/api/apiSlice";

export const articleApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getArticle: builder.query({
        query: (id) => `articles/${id}`,
        }),
        getArticles: builder.query({
        query: () => "articles",
        keepUnusedDataFor: 5,
        providesTags: ["Article"],

        }),
    }),
})
export const { useGetArticleQuery, useGetArticlesQuery } = articleApiSlice;