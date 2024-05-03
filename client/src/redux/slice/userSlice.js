import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setReduxUser: (state, action) => {
      console.log("change from redux");
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReduxUser, logout } = userSlice.actions;

export default userSlice.reducer;
