import { createSlice } from "@reduxjs/toolkit";
import { _getQuestions } from "../_DATA";
let initialState = {};

const sliceQuestions = createSlice({
  name: "question",
  initialState,
  reducers: {
    getQuestions(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getQuestions } = sliceQuestions.actions;
export default sliceQuestions.reducer;

export const fetchQuestions = () => async (dispatch) => {
  const response = await _getQuestions();
  dispatch(getQuestions(response));
};
