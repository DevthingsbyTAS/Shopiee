import axios from "axios";
import { baseurl, config } from "../../utils/axiosConfig";

const getProducts = async (userData) => {
  const response = await axios.get(baseurl + "product");
  if (response.data) {
    return response.data;
  }
};
const addToWishlist = async (prodId) => {
  const response = await axios.put(
    baseurl + "product/wishlist",
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};
export const productService = {
  getProducts,
  addToWishlist,
};
