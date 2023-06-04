import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const InitialState = {
  user: getCustomerfromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      return authService.register(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkApi) => {
    try {
      return authService.login(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const getUseProductrWishlist = createAsyncThunk(
  "user/getUserWishlist",
  async (data, thunkApi) => {
    try {
      return authService.getUserWishlist();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const addToCart = createAsyncThunk(
  "user/addToCart",
  async (data, thunkApi) => {
    try {
      return authService.addToCart(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const getCart = createAsyncThunk(
  "user/getCart",
  async (data, thunkApi) => {
    try {
      return authService.getCart();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess) {
          toast.info("user created!");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("couldn't create at the moment!");
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess) {
          localStorage.setItem("token", action?.payload?.token);
          toast.info("user logged in!");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("couldn't login at the moment!");
        }
      })
      .addCase(getUseProductrWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUseProductrWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
        if (state.isSuccess) {
          toast.info("Prdouct wishlisted fetched!");
        }
      })
      .addCase(getUseProductrWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("couldn't fetch at the moment!");
        }
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartData = action.payload;
        if (state.isSuccess) {
          toast.info("Prdouct added to cart!");
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("couldn't add to cart at moment!");
        }
      })
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartData = action.payload;
        if (state.isSuccess) {
          toast.info("Fetched user cart data!");
        }
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("couldn't fetch cart at moment!");
        }
      });
  },
});
export default authSlice.reducer;
