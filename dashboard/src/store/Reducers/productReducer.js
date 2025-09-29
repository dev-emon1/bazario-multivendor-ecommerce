import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_products = createAsyncThunk(
  "product/add-product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/add-product", product, {
        withCredentials: true,
      });
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const get_products = createAsyncThunk(
  "product/get-products",
  async (
    { perPage, page, searchQuery },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/get-products?page=${page}&&searchQuery=${searchQuery}&&perPage=${perPage}`,
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

export const get_editable_product = createAsyncThunk(
  "product/get-editable_product",
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/get-editable-product/${productId}`, {
        withCredentials: true,
      });
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const update_product = createAsyncThunk(
  "product/update-product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/update-product`, product, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const update_product_images = createAsyncThunk(
  "product/update-product-images",
  async (
    { oldImage, newImage, productId },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("oldImage", oldImage);
      formData.append("newImage", newImage);
      formData.append("productId", productId);

      const { data } = await api.post(`/update-product-images`, formData, {
        withCredentials: true,
      });
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

const productReducer = createSlice({
  name: "product",
  initialState: {
    successMessage: "",
    errorMessage: "",
    isLoading: false,
    products: [],
    product: "",
    totalProducts: 0,
  },
  reducers: {
    messageCleared: (state, _) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_products.pending, (state, { payload }) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(add_products.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error;
      })
      .addCase(add_products.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = payload?.message;
      })
      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.products = payload?.products;
        state.totalProducts = payload?.totalProducts;
      })
      .addCase(get_editable_product.fulfilled, (state, { payload }) => {
        state.product = payload?.product;
      })
      .addCase(update_product.pending, (state, { payload }) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(update_product.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error;
      })
      .addCase(update_product.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product = payload?.product;
        state.successMessage = payload?.message;
      })
      .addCase(update_product_images.fulfilled, (state, { payload }) => {
        state.product = payload?.product;
        state.successMessage = payload.message;
      });
  },
});

export const { messageCleared } = productReducer.actions;
export default productReducer.reducer;
