import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "../features/auth/authSlice";
import { getDecryptedRefreshToken } from "@/lib/cryptography";

// Create base query with authentication
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth?.token;
    const token = window.localStorage.getItem("accesstoken");
    headers.set("content-type", "application/json");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Custom base query with re-authentication when token expires
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // const refreshToken = await getDecryptedRefreshToken();
    const refreshToken = window.localStorage.getItem("refreshToken");

    if (refreshToken) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        });
        const resultResponse = await response.json();

        if (resultResponse.status === "success") {
          api.dispatch(setCredentials({
            token: resultResponse.token,
            refreshToken: refreshToken,
          }));

          // Retry the original query with new token
          result = await baseQuery(args, api, extraOptions);
        } else {
          // api.dispatch(logout());
          alert("Your session has expired. Please login again.");
        }
      } catch (error) {
        console.error("Failed to refresh access token", error);
        // api.dispatch(logout());
      }
    } else {
      api.dispatch(logout());
      alert("Your session has expired. Please login again.");
    }
  }

  return result;
};

// Create api slice with custom base query
export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["User"], // tagTypes are used for cache invalidation
  endpoints: (builder) => ({}),
});
