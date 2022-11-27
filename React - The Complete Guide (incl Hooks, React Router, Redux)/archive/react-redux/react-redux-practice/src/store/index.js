import {configureStore, createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        toggleCart(state) {
            state.show = !state.show
        },
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    name: newItem.title,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.amount++
                existingItem.totalPrice += newItem.price
            }
            console.log(state.items)
        }
    }
})

const store = configureStore({
    reducer: {cart: cartSlice.reducer}
})

export default store
export const cartActions = cartSlice.actions