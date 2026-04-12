import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ProductCard from '../../components/ProductCard'
import { fetchRestaurants } from '../../services/api'
import { mapRestaurant } from '../../services/mappers'
import * as S from './styles'

function Profile() {
    const { id } = useParams()

    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const [selectedProduct, setSelectedProduct] = useState(null)
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

    const restaurant = useMemo(
        () => restaurants.find((item) => item.id === Number(id)),
        [restaurants, id]
    )

    const addToCart = (product) => {
        setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id)

        if (existing) {
            return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
        }

        return [...prev, { ...product, quantity: 1 }]
        })

        setSelectedProduct(null)
        setIsCartOpen(true)
    }

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

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem('efood_cart')
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
            onOpenCart={() => setIsCartOpen(true)}
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
            onAddToCart={addToCart}
        />

        <Cart
            isOpen={isCartOpen}
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemoveItem={removeItem}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            onClearCart={clearCart}
        />
        </>
    )}

export default Profile
