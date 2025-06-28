import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.data.token);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
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
  reducers: {
    messageCleared: (state, _) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error;
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = payload?.message;
      });
  },
});

export const { messageCleared } = authReducer.actions;
export default authReducer.reducer;
