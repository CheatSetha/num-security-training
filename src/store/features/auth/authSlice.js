
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token); // Save token to localStorage
      // secureRefreshToken(action.payload.refreshToken); // Securely save refresh token
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload?.data;
    },
    logout: (state) => {
      state.user = "";
      state.token = null;
      window.localStorage.removeItem("accesstoken"); // Remove token from localStorage
      window.localStorage.removeItem("refreshToken"); // Remove token from localStorage

    },

  },
});

export const { setCredentials, logout, setCurrentUser,  } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state?.auth.user;
export const selectCurrentAccessToken = (state) => state?.auth?.token;
