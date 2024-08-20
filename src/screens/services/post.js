import axios from "axios";

export const postWithoutToken = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      console.error(error.message);
      return error.message;
    }
  }
};
