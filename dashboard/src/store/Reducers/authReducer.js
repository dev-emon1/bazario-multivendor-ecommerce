import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (data) => {
    try {
      const { responseData } = await api.post("/admin-login", data, {
        withCredentials: true,
      });
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    isLoading: false,
    user: null,
    isAuthenticated: false,
    token: null,
    loginTimestamp: null,
    role: "guest",
  },
  reducers: {},
  extraReducers: () => {},
});

export const {} = authReducer.actions;
export default authReducer.reducer;
