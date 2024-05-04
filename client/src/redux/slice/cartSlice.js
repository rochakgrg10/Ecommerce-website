import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      let products = action.payload;
      // let { name, _id, price, image } = product;

      /* check if that _id already exists   */
      /*  state.value.push({
        quantity: 1,
        name,
        _id,
        price,
        image,
      }); */
      let temp = [...state.value];
      if (temp.find((el) => el._id == products._id)) {
        temp = temp.map((el) => {
          if (el._id == products._id) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
      } else {
        temp.push({ ...products, quantity: 1 });
      }
      state.value = temp;
      console.log(temp);
    },
    resetItems: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItems, resetItems } = cartSlice.actions;

export default cartSlice.reducer;
