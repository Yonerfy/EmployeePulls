import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions } from "../_DATA";

export const fetchQuestions = createAsyncThunk(
  "question/fetchQuestions",
  async () => {
    const response = await _getQuestions();
    return response;
  }
);

let initialState = {};

const sliceQuestions = createSlice({
  name: "question",
  initialState,
  reducers: {
    getQuestions(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const { getQuestions } = sliceQuestions.actions;
export default sliceQuestions.reducer;
