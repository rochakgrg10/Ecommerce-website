import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      //   state.value = ["one", "two", "three"];
      let product = action.payload;
      const { _id, name, image, price } = product;

      state.value.push({
        quantity: 1,
        _id,
        name,
        price,
        image,
      });
      /* if (state.value.find((el) => el._id == _id)) {
        state.value.push({
          ...state.value,
          quantity: quantity++,
        });
      } */
    },
    increaseQuantity: (state, action) => {
      let products = action.payload;
      console.log(state.value);
    },
    resetItems: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItems, resetItems, increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
