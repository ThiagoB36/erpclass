import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { prodsSlice } from "./prodsSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    prodsInfo: prodsSlice.reducer,
  },
});

export default store;
