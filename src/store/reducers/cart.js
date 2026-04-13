import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        hydrateCart: (state, action) => {
        state.items = action.payload
        },
        addItem: (state, action) => {
        const product = action.payload
        const existingItem = state.items.find((item) => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            state.items.push({ ...product, quantity: 1 })
        }

        state.isOpen = true
        },
        removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
        },
        increaseQuantity: (state, action) => {
        const item = state.items.find((product) => product.id === action.payload)

        if (item) {
            item.quantity += 1
        }
        },
        decreaseQuantity: (state, action) => {
        const item = state.items.find((product) => product.id === action.payload)

        if (item) {
            item.quantity -= 1
        }

        state.items = state.items.filter((product) => product.quantity > 0)
        },
        clearCart: (state) => {
        state.items = []
        },
        openCart: (state) => {
        state.isOpen = true
        },
        closeCart: (state) => {
        state.isOpen = false
        }
    }
})

export const {
    hydrateCart,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    openCart,
    closeCart
} = cartSlice.actions

export default cartSlice.reducer
