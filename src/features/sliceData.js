import { createSlice } from "@reduxjs/toolkit";

let initialState = null;

const sliceData = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const {} = sliceData.actions;
export default sliceData.reducer;
