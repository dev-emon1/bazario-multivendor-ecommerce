import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

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

export const seller_register = createAsyncThunk(
  "auth/seller-register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.data.token);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const seller_login = createAsyncThunk(
  "auth/seller-login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.data.token);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const get_user_info = createAsyncThunk(
  "auth/get-user",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-user", {
        withCredentials: true,
      });
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const upload_profile_image = createAsyncThunk(
  "auth/upload-profile-image",
  async (image, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/upload-profile-image", image, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

export const add_profile_info = createAsyncThunk(
  "auth/add-profile-info",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/add-profile-info", info, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.data);
    }
  }
);

const returnRole = (token) => {
  if (token) {
    const decoded = jwtDecode(token);
    const expireTime = new Date(decoded.exp * 1000);
    if (new Date() > expireTime) {
      localStorage.removeItem("accessToken");
      return null;
    } else {
      return decoded.role;
    }
  } else {
    return null;
  }
};

const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    isLoading: false,
    userInfo: "",
    isAuthenticated: false,
    loginTimestamp: null,
    role: returnRole(localStorage.getItem("accessToken")),
    token: localStorage.getItem("accessToken"),
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
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(seller_register.pending, (state, { payload }) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(seller_register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error;
      })
      .addCase(seller_register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = payload?.message;
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(seller_login.pending, (state, { payload }) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(seller_login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error;
      })
      .addCase(seller_login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = payload?.message;
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(get_user_info.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userInfo = payload?.userInfo;
      })
      .addCase(upload_profile_image.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(upload_profile_image.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userInfo = payload?.userInfo;
        state.successMessage = payload?.message;
      })
      .addCase(add_profile_info.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(add_profile_info.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userInfo = payload?.userInfo;
        state.successMessage = payload?.message;
      });
  },
});

export const { messageCleared } = authReducer.actions;
export default authReducer.reducer;
