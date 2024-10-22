import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            return [];
        },
        increaseQuantity(state, action) {
            const existingProduct = state.find(item => item.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const existingProduct = state.find(item => item.id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
