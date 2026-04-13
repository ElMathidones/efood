import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ProductCard from '../../components/ProductCard'
import { addItem, openCart } from '../../store/reducers/cart'
import { fetchRestaurants } from '../../services/api'
import { mapRestaurant } from '../../services/mappers'
import * as S from './styles'

function Profile() {
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.cart)
    const { id } = useParams()

    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

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

    const restaurant = useMemo(
        () => restaurants.find((item) => item.id === Number(id)),
        [restaurants, id]
    )

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

    const handleAddToCart = (product) => {
        dispatch(addItem(product))
        setSelectedProduct(null)
    }

    if (isLoading) {
        return <h1 style={{ padding: '24px' }}>Carregando restaurante...</h1>
    }

    if (hasError) {
        return <h1 style={{ padding: '24px' }}>Erro ao carregar restaurante.</h1>
    }

    if (!restaurant) {
        return <h1 style={{ padding: '24px' }}>Restaurante não encontrado</h1>
    }

    return (
        <>
        <Header
            isProfile
            cartCount={totalItems}
            onOpenCart={() => dispatch(openCart())}
        />

        <Banner
            image={restaurant.hero}
            category={restaurant.category}
            title={restaurant.title}
        />

        <S.Products className="container">
            {restaurant.products.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                onOpenModal={setSelectedProduct}
            />
            ))}
        </S.Products>

        <Footer />

        <Modal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
        />

        <Cart />
        </>
    )}

export default Profile
