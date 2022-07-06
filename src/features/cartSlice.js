import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartTotalQuantity += 1;
        toast.info(`${action.payload.name} increased  quantity`, {
          position: 'bottom-left',
        });
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} adde to cart`, {
          position: 'bottom-right',
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
