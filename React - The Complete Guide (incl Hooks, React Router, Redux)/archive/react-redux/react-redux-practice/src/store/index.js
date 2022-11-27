import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialCartState = {
    show: false,
    cartItems: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show
        },
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    name: newItem.name,
                    amount: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.amount++
                existingItem.totalPrice += newItem.price
            }
        }
    }
})

const store = configureStore({
    reducer: {showCart: cartSlice.reducer}
})

export default store
export const showCartActions = cartSlice.actions