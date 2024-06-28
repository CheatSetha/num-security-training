import { apiSlice } from "@/store/api/apiSlice";

export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCourse: builder.query({
        query: (id) => `courses/${id}`,
        }),
        getCourses: builder.query({
        query: () => "courses",
        keepUnusedDataFor: 5,
        providesTags: ["Course"],

        }),
    }),
})
export const { useGetCourseQuery, useGetCoursesQuery } = courseApiSlice;