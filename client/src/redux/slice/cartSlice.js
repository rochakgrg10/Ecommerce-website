import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      let products = action.payload;
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
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      let temp = current(state.value);
      if (temp.find((el) => el._id == productId)) {
        temp = temp.map((el) => {
          if (el._id == productId) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
      }
      state.value = temp;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      let temp = current(state.value);
      if (temp.find((el) => el._id == productId)) {
        temp = temp.map((el) => {
          if (el._id == productId) {
            return { ...el, quantity: el.quantity - 1 };
          }
          return el;
        });
      }
      state.value = temp;
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      let temp = current(state.value);
      temp = temp.filter((el) => {
        return el._id != productId;
      });
      state.value = temp;
      console.log(`${productId} is removed`);
    },
    resetItems: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCartItems,
  resetItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
