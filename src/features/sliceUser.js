import { createSlice } from "@reduxjs/toolkit";
import { _getUsers } from "../_DATA";
let initialState = {};

const sliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getUser } = sliceUser.actions;
export default sliceUser.reducer;

export const fetchUsers = () => async (dispatch) => {
  const response = await _getUsers();
  dispatch(getUser(response));
};
