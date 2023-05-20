import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Blogservice } from "./blogService";
const InitialState = {
  blogs: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getblogs = createAsyncThunk("getblogs", async (data, thunkApi) => {
  try {
    return Blogservice.getBlogs();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const getABlog = createAsyncThunk("getABlog", async (data, thunkApi) => {
  try {
    return Blogservice.getABlog(data);
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const blogslice = createSlice({
  name: "blogslice",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getblogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getblogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
        if (state.isSuccess) {
          toast.info("blogs Fetched!");
        }
      })
      .addCase(getblogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("cant fetch blogs due to:" + action.error);
        }
      })
      .addCase(getABlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleBlog = action.payload;
        if (state.isSuccess) {
          toast.info("blog Fetched!");
        }
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("cant fetch blog due to:" + action.error);
        }
      });
  },
});
export default blogslice.reducer;
