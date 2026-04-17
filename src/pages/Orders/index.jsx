import { useDispatch, useSelector } from 'react-redux'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { openCart } from '../../store/reducers/cart'
import * as S from './styles'

function formatPrice(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

function formatDate(dateString) {
    const date = new Date(dateString)

    return (
        date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }) +
        ' às ' +
        date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        })
    )
}

function Orders() {
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.cart)
    const orders = JSON.parse(localStorage.getItem('efood_orders') || '[]')
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <S.PageWrapper>
            <Header
                isProfile
                cartCount={totalItems}
                onOpenCart={() => dispatch(openCart())}
            />

            <S.Wrapper className="container">
                <h1>Meus pedidos</h1>

                {orders.length === 0 ? (
                    <S.Empty>Nenhum pedido foi realizado ainda.</S.Empty>
                ) : (
                    <S.List>
                        {orders
                            .slice()
                            .reverse()
                            .map((order, index) => (
                                <S.Card key={`${order.createdAt}-${index}`}>
                                    <S.TopRow>
                                        <div>
                                            <h2>Pedido #{order.apiOrderId ?? order.orderNumber}</h2>
                                            <span>{formatDate(order.createdAt)}</span>
                                        </div>
                                        <strong>{formatPrice(order.total)}</strong>
                                    </S.TopRow>

                                    <S.Items>
                                        {order.items.map((item) => (
                                            <li key={`${order.createdAt}-${item.id}`}>
                                                <span>
                                                    {item.quantity}x {item.name}
                                                </span>
                                                <span>{formatPrice(item.price * item.quantity)}</span>
                                            </li>
                                        ))}
                                    </S.Items>

                                    <S.Address>
                                        <h3>Entrega</h3>
                                        <p>
                                            {order.delivery.receiver} — {order.delivery.address},{' '}
                                            {order.delivery.number}
                                            {order.delivery.complement
                                                ? `, ${order.delivery.complement}`
                                                : ''}
                                        </p>
                                        <p>
                                            {order.delivery.city} — CEP {order.delivery.zipCode}
                                        </p>
                                    </S.Address>
                                </S.Card>
                            ))}
                    </S.List>
                )}
            </S.Wrapper>

            <Cart />
            <Footer />
        </S.PageWrapper>
    )
}

export default Orders
