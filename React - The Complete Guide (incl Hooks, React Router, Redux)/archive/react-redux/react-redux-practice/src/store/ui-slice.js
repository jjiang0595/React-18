import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'cart',
    initialState: {
        showVisibility: false
    },
    reducers: {
        toggleCart(state) {
            state.showVisibility = !state.showVisibility
        },
    }
})

export default uiSlice.reducer
export const uiActions = uiSlice.actions