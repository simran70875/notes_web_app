import axios from "axios";

export const getWithoutToken = async (url) => {
  try {
    const response = await axios.get(url);
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






