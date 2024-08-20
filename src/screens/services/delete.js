import axios from "axios";

export const deleteWithoutToken = async (url, data) => {
  try {
    const response = await axios.delete(url);
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
