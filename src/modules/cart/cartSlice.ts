import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState, ItemCart } from "../../types/cart";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemCart>) => {
      const productToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === productToAdd.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: ItemCart = {
          ...productToAdd,
          quantity: 1,
        };
        state.items.push(newItem);
      }
      state.totalPrice += productToAdd.price;
      state.totalQuantity += 1;
    },
  },
});

export default basketSlice.reducer;

export const { addItem } = basketSlice.actions;
