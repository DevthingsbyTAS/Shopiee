import axios from "axios";
import { baseurl } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(baseurl + "user/register", userData);
  if (response.data) {
    return response.data;
  }
};
export const authService = {
  register,
};
