import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../_DATA";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await _getUsers();
  return response;
});
let initialState = {};

const sliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const { getUser } = sliceUser.actions;
export default sliceUser.reducer;
