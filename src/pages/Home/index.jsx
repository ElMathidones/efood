import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { fetchRestaurants } from '../../services/api'
import { mapRestaurant } from '../../services/mappers'
import * as S from './styles'

function Home() {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('efood_cart')
    return saved ? JSON.parse(saved) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('efood_cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    async function loadRestaurants() {
      try {
        setIsLoading(true)
        setHasError(false)

        const data = await fetchRestaurants()
        const normalized = data.map(mapRestaurant)
        setRestaurants(normalized)
      } catch (error) {
        console.error(error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadRestaurants()
  }, [])

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
        {isLoading && <p>Carregando restaurantes...</p>}

        {hasError && (
          <p>Ocorreu um erro ao carregar os restaurantes. Tente novamente.</p>
        )}

        {!isLoading &&
          !hasError &&
          restaurants.map((restaurant) => (
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
