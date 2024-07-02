import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItems: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const id = action.payload?.card?.info?.id;
      state.totalItems += 1;

      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { selecteditem: action.payload, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      const id = action.payload?.card?.info?.id;

      state.totalItems = state.totalItems === 1 ? 0 : state.totalItems - 1;

      if (state.items[id].quantity > 1) {
        const decreaseQuantity = state.items[id];
        decreaseQuantity.quantity -= 1;
      } else {
        delete state.items[id];
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalItems = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
