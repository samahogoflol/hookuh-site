import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product"; // Імпорт Product
import type { CartState, ItemCart } from "../../types/cart"; // Імпорт ItemCart

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  totalDiscount: 0,
};

const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
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
      state.totalQuantity += 1;
      state.totalPrice += productToAdd.price;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const itemToRemove = state.items.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
  },
});

export default basketSlice.reducer;
export const { addItem, incrementQuantity, decrementQuantity, removeItem } = basketSlice.actions;
