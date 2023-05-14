import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";
const InitialState = {
  products: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getProducts = createAsyncThunk(
  "getProducts",
  async (data, thunkApi) => {
    try {
      return productService.getProducts();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const AddtoWishList = createAsyncThunk(
  "AddtoWishList",
  async (data, thunkApi) => {
    try {
      return productService.addToWishlist(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
        if (state.isSuccess) {
          toast.info("Products Fetched!");
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("cant fetch product due to:" + action.error);
        }
      })
      .addCase(AddtoWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddtoWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.AddtoWishList = action.payload;
        if (state.isSuccess) {
          toast.info("Added to wishlist!");
        }
      })
      .addCase(AddtoWishList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("cant add to:" + action.error);
        }
      });
  },
});
export default productSlice.reducer;
