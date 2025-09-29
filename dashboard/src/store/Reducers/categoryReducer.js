import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_category = createAsyncThunk(
  "category/add-category",
  async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);

      const { data } = await api.post("/add-category", formData, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);
export const get_category = createAsyncThunk(
  "category/get-category",
  async (
    { perPage, page, searchQuery },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/get-category?page=${page}&&searchQuery=${searchQuery}&&perPage=${perPage}`,
        {
          withCredentials: true,
        }
      );
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

const categoryReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    isLoading: false,
    categories: [],
    totalCategory: 0,
  },
  reducers: {
    messageCleared: (state, _) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_category.pending, (state, { payload }) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(add_category.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error;
      })
      .addCase(add_category.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = payload?.message;
        state.categories = [...state.categories, payload.category];
      })
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.categories = payload?.categories;
        state.totalCategory = payload?.totalCategory;
      });
  },
});

export const { messageCleared } = categoryReducer.actions;
export default categoryReducer.reducer;
