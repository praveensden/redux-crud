import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Jane Doe",
    email: "jane@yahoo.com",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existinUser = state.find((user) => user.id === id);
      if (existinUser) {
        existinUser.name = name;
        existinUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existinUser = state.find((user) => user.id === id);
      if (existinUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});
export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
