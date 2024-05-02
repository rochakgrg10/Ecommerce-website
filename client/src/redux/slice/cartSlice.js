import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      //   state.value = ["one", "two", "three"];
      state.value.push(action.payload);
    },
    resetItems: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItems, resetItems } = cartSlice.actions;

export default cartSlice.reducer;
