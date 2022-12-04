import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'cart',
    initialState: {
        showVisibility: false,
        notification: null
    },
    reducers: {
        toggleCart(state) {
            state.showVisibility = !state.showVisibility
        },
        showNotification(state, action) {
            state.notification =
                {
                    status: action.payload.status,
                    title: action.payload.title,
                    message: action.payload.message
                }
        }
    }
})

export default uiSlice.reducer
export const uiActions = uiSlice.actions