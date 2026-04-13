import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { openCart } from '../../store/reducers/cart'
import { fetchRestaurants } from '../../services/api'
import { mapRestaurant } from '../../services/mappers'
import * as S from './styles'

function Home() {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.cart)

  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

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

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      <Header cartCount={totalItems} onOpenCart={() => dispatch(openCart())} />
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

      <Cart />

      <Footer />
    </>
  )
}

export default Home
