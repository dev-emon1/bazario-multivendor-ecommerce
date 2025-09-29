import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_requested_sellers = createAsyncThunk(
  "sellers/get-requested-sellers",
  async (
    { perPage, page, searchQuery },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/get-requested-sellers?page=${page}&&searchQuery=${searchQuery}&&perPage=${perPage}`,
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

export const get_seller = createAsyncThunk(
  "sellers/get-seller",
  async (sellerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/get-seller/${sellerId}`, {
        withCredentials: true,
      });
      console.log(data.data);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const update_seller_status = createAsyncThunk(
  "sellers/update-seller-status",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/update-seller-status`, info, {
        withCredentials: true,
      });
      console.log(data.data);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

const sellerReducer = createSlice({
  name: "seller",
  initialState: {
    successMessage: "",
    errorMessage: "",
    isLoading: false,
    sellers: [],
    totalSeller: 0,
    seller: "",
  },
  reducers: {
    messageCleared: (state, _) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_requested_sellers.fulfilled, (state, { payload }) => {
        state.sellers = payload.sellers;
        state.totalSeller = payload?.totalSeller;
      })
      .addCase(get_seller.fulfilled, (state, { payload }) => {
        state.seller = payload.seller;
      })
      .addCase(update_seller_status.fulfilled, (state, { payload }) => {
        state.seller = payload.seller;
        state.successMessage = payload.successMessage;
      });
  },
});

export const { messageCleared } = sellerReducer.actions;
export default sellerReducer.reducer;
