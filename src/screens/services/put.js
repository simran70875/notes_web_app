import axios from "axios";

export const putWithoutToken = async (url, data) => {
  try {
    const response = await axios.put(url, data);
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
