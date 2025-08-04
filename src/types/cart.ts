import type { Product } from "./product";

export interface ItemCart extends Product {
  quantity: number;
}

export interface CartState {
  items: ItemCart[];
  totalPrice: number;
  totalQuantity: number;
  totalDiscount: number;
}
