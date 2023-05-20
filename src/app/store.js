import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authSlice from "../features/user/userSLice";
import productSlice from "../features/products/productSlice";
import blogSlice from "../features/blog/blogSlice";
import contactSlice from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    product: productSlice,
    blog: blogSlice,
    contact: contactSlice,
  },
});
