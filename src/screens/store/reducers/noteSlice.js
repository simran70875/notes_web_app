import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWithoutToken } from "../../services/get";
import { paths } from "../../config/paths";

export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (_, thunkAPI) => {
    const userID = thunkAPI.getState().auth.userid;
    const response = await getWithoutToken(`${paths.getNotes}/${userID}`);
    console.log("response ==> ", response.data);
    return response.data;
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default noteSlice.reducer;
