import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './state'

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCart(state, action) {
      state.basket.push(action.payload);
      state.count = state.count + 1

      state.pricesProducts = state.basket.reduce((sum, current) => {
          return sum + parseInt(current.color.price)
      }, 0);
    },
    removeProductCart(state, action) {
        state.basket = state.basket.filter(
            (item) => item.id !== action.payload
        );
        state.pricesProducts = state.basket.reduce((sum, current) => {
            return sum + parseInt(current.color.price)
        }, 0);
        state.count = state.count - 1;
    }
  },
})
export const { addProductCart, removeProductCart } = cartSlice.actions
export default cartSlice.reducer