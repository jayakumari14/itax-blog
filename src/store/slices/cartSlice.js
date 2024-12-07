import { createSlice } from "@reduxjs/toolkit";

// Initialize the cart from localStorage only on the client side
const initialState = {
  cart:
    typeof window !== "undefined" && localStorage.getItem("testCart")
      ? JSON.parse(localStorage.getItem("testCart")).cart
      : [],
  totalAmount:
    typeof window !== "undefined" && localStorage.getItem("testCart")
      ? JSON.parse(localStorage.getItem("testCart")).totalAmount
      : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      // Check if the item already exists in the cart
      const index = state.cart.findIndex((i) => {
        return (
          item.title.replace(/ /g, "").toLowerCase() ===
          i.title.replace(/ /g, "").toLowerCase()
        );
      });
      if (state.cart.length !== 0 && index !== -1) {
        return;
      }
      // Add item to the cart
      state.cart.push(item);
      state.totalAmount += item.price;

      // Save cart to localStorage (optional)
      if (typeof window !== "undefined") {
        localStorage.setItem("testCart", JSON.stringify(state));
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      const index = state.cart.findIndex((i) => {
        return item.title === i.title;
      });
      if (index === -1) return;
      state.totalAmount -= item.price;
      state.cart.splice(index, 1);

      // Update localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("testCart", JSON.stringify(state));
      }
    },
    resetCart(state) {
      // Reset the cart to the initial state
      return initialState;

      // Optional: also clear from localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("testCart");
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
