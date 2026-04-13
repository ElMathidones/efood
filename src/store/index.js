import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { hydrateCart } from './reducers/cart'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

const savedCart = localStorage.getItem('efood_cart')

if (savedCart) {
    store.dispatch(hydrateCart(JSON.parse(savedCart)))
}

store.subscribe(() => {
    const { items } = store.getState().cart
    localStorage.setItem('efood_cart', JSON.stringify(items))
})
