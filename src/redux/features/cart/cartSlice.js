import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.productId === action.payload.id
      );
      if (existingProduct) {
        alert('Product is already in cart.');
      } else {
        state.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
          productId: action.payload.id,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) product.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product && product.quantity > 1) product.quantity--;
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
