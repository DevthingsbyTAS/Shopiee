import axios from "axios";
import { baseurl, config } from "../../utils/axiosConfig";

const getBlogs = async (userData) => {
  const response = await axios.get(baseurl + "blog");
  if (response.data) {
    return response.data;
  }
};
const getABlog = async (userData) => {
  const response = await axios.get(baseurl + `blog/${userData}`);
  if (response.data) {
    return response.data;
  }
};
// const addToWishlist = async (prodId) => {
//   const response = await axios.put(
//     baseurl + "product/wishlist",
//     { prodId },
//     config
//   );
//   if (response.data) {
//     return response.data;
//   }
// };
export const Blogservice = {
  getBlogs,
  getABlog,
};
