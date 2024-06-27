import { removeRefreshToken, secureRefreshToken } from "@/lib/cryptography";
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
      secureRefreshToken(action.payload.refreshToken);
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload?.data;
    },
    logout: (state) => {
      state.user = "";
      state.token = null;
      removeRefreshToken();
      console.log("logout");
    },
  },
});

export const { setCredentials, logout, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state?.auth.user;
export const selectCurrentAccessToken = (state) => state?.auth?.token;
