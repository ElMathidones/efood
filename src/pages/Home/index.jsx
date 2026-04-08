import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import restaurants from '../../data/restaurants'
import * as S from './styles'

function Home() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('efood_cart')
    return saved ? JSON.parse(saved) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('efood_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const removeItem = (idToRemove) => {
    setCartItems((prev) => prev.filter((item) => item.id !== idToRemove))
  }

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('efood_cart')
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      <Header cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />
      <Banner home />

      <S.ListSection className="container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </S.ListSection>

      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={removeItem}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
        onClearCart={clearCart}
      />

      <Footer />
    </>
  )
}

export default Home
