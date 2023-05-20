import axios from "axios";
import { baseurl, config } from "../../utils/axiosConfig";

const postQuery = async (userData) => {
  const response = await axios.post(baseurl + "enquiry", userData);
  if (response.data) {
    return response.data;
  }
};

export const contactService = {
  postQuery,
};
