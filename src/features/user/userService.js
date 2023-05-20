import axios from "axios";
import { baseurl, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(baseurl + "user/register", userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};
const login = async (userData) => {
  const response = await axios.post(baseurl + "user/login", userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};
const getUserWishlist = async (userData) => {
  const response = await axios.get(baseurl + "user/wishlist", config);
  if (response.data) {
    return response.data;
  }
};
export const authService = {
  register,
  login,
  getUserWishlist,
};
