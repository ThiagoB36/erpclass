import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: "",
  },

  reducers: {
    changeUser: (state, action) => {
      return { ...state, userInfo: action.payload };
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
