import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the interface for a cart item
interface CartItem {
  _id: any;
  name: string;
  image: string;
  price: number;
  description: string;
  unit: string;
  countInStock: number;
  qty: number;
  date: string;
  sellerId: any;
  categoryId: any;
  brandId: any;
  views: number;
}

// Define the type for the Cart state
export type Cart = CartItem[];

const initialState: Cart = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      const existingItem = state.find((item) => item._id === itemToAdd._id);

      if (existingItem) {
        // If the item is already in the cart, update the quantity
        existingItem.qty += itemToAdd.qty;
      } else {
        // If the item is not in the cart, add it
        state.push(itemToAdd);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

// Create a selector to access the cart state in the Redux store
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
