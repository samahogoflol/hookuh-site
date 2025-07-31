import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

export interface CartState {
  items: [];
  totalPrice: number;
  totalQuantity: number;
}
const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const exitingItem = state.items.find(item => item.id === productToAdd.id)
      const newItem: Product = {
        ...productToAdd,
        quantity: 1,
      };
      state.items.push(newItem);
    },
  },
});
