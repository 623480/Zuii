import { createSlice,current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItems: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const newid = action.payload?.card?.info?.id;
      state.totalItems += 1;

      
      if (state.items[newid]) {
        state.items.quantity += 1;
      } else {
        state.items[newid]={...action.payload, quantity: 1 }
      }

      console.log(current(state));
    },
    removeItem: (state, action) => {
      const newid = action.payload?.card?.info?.id;

      state.totalItems=state.totalItems-1;

      if(state.items[newid].quantity>1)
        {
          const decreaseQuantity=state.items[newid];
          decreaseQuantity.quantity-=1
        }
        else{
          delete state.items[newid]
        }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalItems=0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
