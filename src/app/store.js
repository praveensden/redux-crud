import { configureStore } from "@reduxjs/toolkit";
import users from "../features/users/UserSlice";

export const store = configureStore({
  reducer: {
    users,
  },
});
