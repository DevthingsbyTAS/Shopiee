import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { contactService } from "./contactService";
const InitialState = {
  contacts: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const postQuery = createAsyncThunk(
  "postQuery",
  async (data, thunkApi) => {
    try {
      return contactService.postQuery(data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const contactSlice = createSlice({
  name: "contactSlice",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contacts = action.payload;
        if (state.isSuccess) {
          toast.info("contacts Fetched!");
        }
      })
      .addCase(postQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("cant fetch contact due to:" + action.error);
        }
      });
  },
});
export default contactSlice.reducer;
