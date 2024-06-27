// this the extended slice for auth
import { apiSlice } from "@/store/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // build.mutation is used for POST, PUT, DELETE
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getMe: builder.query({
      query: () => "auth/me",
      keepUnusedDataFor: 5,
      providesTags: ["User"],
      
    }),
  }),
});
// auto generated hooks for login mutation
export const { useLoginMutation, useGetMeQuery } = authApiSlice;
