import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "Rochak",
  },
  reducers: {
    setReduxUser: (state, action) => {
      console.log("change from redux");
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReduxUser } = userSlice.actions;

export default userSlice.reducer;
