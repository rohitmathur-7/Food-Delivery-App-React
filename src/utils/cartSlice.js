import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const idx = state.items.findIndex((element) => {
        return element.card.info.id === action.payload.card.info.id;
      });

      if (idx != -1) {
        state.items[idx].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      const idx = state.items.findIndex((element) => {
        return element.card.info.id === action.payload.card.info.id;
      });

      if (idx != -1) {
        state.items[idx].quantity -= 1;
      }

      if (state.items[idx].quantity == 0) {
        state.items = state.items.filter(
          (element) => element.card.info.id !== action.payload.card.info.id
        );
      }
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
