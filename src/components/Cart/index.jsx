import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    increaseQuantity,
    removeItem
} from '../../store/reducers/cart'
import { postCheckout } from '../../services/api'
import * as S from './styles'

function formatPrice(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

function onlyNumbers(value) {
    return value.replace(/\D/g, '')
}

function applyMask(value, type) {
    const numbers = onlyNumbers(value)

    if (type === 'cep') {
        return numbers.replace(/^(\d{5})(\d)/, '$1-$2').slice(0, 9)
    }

    if (type === 'addressNumber') {
        return numbers.slice(0, 6)
    }

    if (type === 'card') {
        return numbers.replace(/(\d{4})(?=\d)/g, '$1 ').trim().slice(0, 19)
    }

    if (type === 'cvv') {
        return numbers.slice(0, 3)
    }

    if (type === 'month') {
        const month = numbers.slice(0, 2)

        if (month.length === 1) return month

        const monthNumber = Number(month)

        if (monthNumber > 12) return '12'

        return month
    }

    if (type === 'year') {
        return numbers.slice(0, 4)
    }

    return value
}

function getOrderIdFromResponse(data) {
    return (
        data?.orderId ??
        data?.id ??
        data?.order_id ??
        data?.pedidoId ??
        data?.pedido_id ??
        null
    )
}

function Cart() {
    const dispatch = useDispatch()
    const { items, isOpen } = useSelector((state) => state.cart)

    const [step, setStep] = useState('cart')
    const [errors, setErrors] = useState({})
    const [apiError, setApiError] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [orderResponse, setOrderResponse] = useState(null)
    const [deliveryData, setDeliveryData] = useState({
        receiver: '',
        address: '',
        city: '',
        zipCode: '',
        number: '',
        complement: ''
    })
    const [paymentData, setPaymentData] = useState({
        cardOwner: '',
        cardNumber: '',
        cvv: '',
        expiresMonth: '',
        expiresYear: ''
    })

    const total = useMemo(
        () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        [items]
    )

    useEffect(() => {
        if (!isOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow || 'auto'
        }
    }, [isOpen])

    const resetFormValues = () => {
        setDeliveryData({
            receiver: '',
            address: '',
            city: '',
            zipCode: '',
            number: '',
            complement: ''
        })

        setPaymentData({
            cardOwner: '',
            cardNumber: '',
            cvv: '',
            expiresMonth: '',
            expiresYear: ''
        })
    }

    const resetStates = () => {
        setStep('cart')
        setErrors({})
        setApiError('')
        setIsProcessing(false)
        setOrderResponse(null)
    }

    const closeAndReset = () => {
        resetStates()
        dispatch(closeCart())
    }

    const validateDelivery = () => {
        const newErrors = {}

        if (!deliveryData.receiver.trim()) {
            newErrors.receiver = 'Informe quem irá receber'
        }

        if (!deliveryData.address.trim()) {
            newErrors.address = 'Informe o endereço'
        }

        if (!deliveryData.city.trim()) {
            newErrors.city = 'Informe a cidade'
        }

        if (onlyNumbers(deliveryData.zipCode).length !== 8) {
            newErrors.zipCode = 'CEP inválido'
        }

        if (!deliveryData.number.trim()) {
            newErrors.number = 'Informe o número'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const validatePayment = () => {
        const newErrors = {}
        const month = Number(paymentData.expiresMonth)
        const year = Number(paymentData.expiresYear)
        const currentYear = new Date().getFullYear()

        if (!paymentData.cardOwner.trim()) {
            newErrors.cardOwner = 'Informe o nome no cartão'
        }

        if (onlyNumbers(paymentData.cardNumber).length !== 16) {
            newErrors.cardNumber = 'Número do cartão inválido'
        }

        if (paymentData.cvv.length !== 3) {
            newErrors.cvv = 'CVV inválido'
        }

        if (!month || month < 1 || month > 12) {
            newErrors.expiresMonth = 'Mês inválido'
        }

        if (paymentData.expiresYear.length !== 4 || year < currentYear) {
            newErrors.expiresYear = 'Ano inválido'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleGoToDelivery = () => {
        if (items.length === 0) return

        setErrors({})
        setApiError('')
        setStep('delivery')
    }

    const handleGoToPayment = () => {
        if (!validateDelivery()) return

        setErrors({})
        setApiError('')
        setStep('payment')
    }

    const handleFinishPayment = async () => {
        if (!validatePayment()) return

        setErrors({})
        setApiError('')
        setIsProcessing(true)

        const payload = {
            products: items.map((item) => ({
                id: item.id,
                price: item.price
            })),
            delivery: {
                receiver: deliveryData.receiver,
                address: {
                    description: deliveryData.address,
                    city: deliveryData.city,
                    zipCode: onlyNumbers(deliveryData.zipCode),
                    number: Number(deliveryData.number),
                    complement: deliveryData.complement
                }
            },
            payment: {
                card: {
                    name: paymentData.cardOwner,
                    number: onlyNumbers(paymentData.cardNumber),
                    code: Number(paymentData.cvv),
                    expires: {
                        month: Number(paymentData.expiresMonth),
                        year: Number(paymentData.expiresYear)
                    }
                }
            }
        }

        try {
            const response = await postCheckout(payload)
            const apiOrderId = getOrderIdFromResponse(response)
            const currentOrders = JSON.parse(localStorage.getItem('efood_orders') || '[]')

            const newOrder = {
                orderNumber: apiOrderId ?? Math.floor(Math.random() * 99999),
                apiOrderId,
                createdAt: new Date().toISOString(),
                items,
                total,
                delivery: deliveryData,
                apiResponse: response
            }

            localStorage.setItem(
                'efood_orders',
                JSON.stringify([...currentOrders, newOrder])
            )

            setOrderResponse(response)
            dispatch(clearCart())
            setStep('success')
        } catch (error) {
            console.error(error)
            setApiError('Ocorreu um erro ao finalizar o pedido. Tente novamente.')
        } finally {
            setIsProcessing(false)
        }
    }

    const handleConclude = () => {
        resetStates()
        resetFormValues()
        dispatch(closeCart())
    }

    if (!isOpen) return null

    return (
        <S.Overlay onClick={closeAndReset}>
            <S.Sidebar onClick={(e) => e.stopPropagation()}>
                {step === 'cart' && (
                    <>
                        {items.length > 0 ? (
                            <S.Items>
                                {items.map((item) => (
                                    <S.Item key={item.id}>
                                        <img src={item.image} alt={item.name} />

                                        <div>
                                            <h4>{item.name}</h4>
                                            <span>{formatPrice(item.price)}</span>

                                            <S.QuantityRow>
                                                <button
                                                    type="button"
                                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                                >
                                                    -
                                                </button>
                                                <strong>{item.quantity}</strong>
                                                <button
                                                    type="button"
                                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                                >
                                                    +
                                                </button>
                                            </S.QuantityRow>
                                        </div>

                                        <S.DeleteButton
                                            type="button"
                                            onClick={() => dispatch(removeItem(item.id))}
                                            title="Remover item"
                                        >
                                            🗑
                                        </S.DeleteButton>
                                    </S.Item>
                                ))}
                            </S.Items>
                        ) : (
                            <S.Empty>Carrinho vazio.</S.Empty>
                        )}

                        <S.Total>
                            <span>Valor total</span>
                            <span>{formatPrice(total)}</span>
                        </S.Total>

                        <S.MainButton
                            type="button"
                            onClick={handleGoToDelivery}
                            disabled={items.length === 0}
                        >
                            Continuar com a entrega
                        </S.MainButton>
                    </>
                )}

                {step === 'delivery' && (
                    <>
                        <S.Title>Entrega</S.Title>

                        <S.Form>
                            <label htmlFor="receiver">
                                Quem irá receber
                                <S.Input
                                    id="receiver"
                                    type="text"
                                    value={deliveryData.receiver}
                                    onChange={(e) =>
                                        setDeliveryData({
                                            ...deliveryData,
                                            receiver: e.target.value
                                        })
                                    }
                                />
                                {errors.receiver && <S.ErrorText>{errors.receiver}</S.ErrorText>}
                            </label>

                            <label htmlFor="address">
                                Endereço
                                <S.Input
                                    id="address"
                                    type="text"
                                    value={deliveryData.address}
                                    onChange={(e) =>
                                        setDeliveryData({
                                            ...deliveryData,
                                            address: e.target.value
                                        })
                                    }
                                />
                                {errors.address && <S.ErrorText>{errors.address}</S.ErrorText>}
                            </label>

                            <label htmlFor="city">
                                Cidade
                                <S.Input
                                    id="city"
                                    type="text"
                                    value={deliveryData.city}
                                    onChange={(e) =>
                                        setDeliveryData({
                                            ...deliveryData,
                                            city: e.target.value
                                        })
                                    }
                                />
                                {errors.city && <S.ErrorText>{errors.city}</S.ErrorText>}
                            </label>

                            <S.Row>
                                <label htmlFor="zipCode">
                                    CEP
                                    <S.Input
                                        id="zipCode"
                                        type="text"
                                        value={deliveryData.zipCode}
                                        onChange={(e) =>
                                            setDeliveryData({
                                                ...deliveryData,
                                                zipCode: applyMask(e.target.value, 'cep')
                                            })
                                        }
                                    />
                                    {errors.zipCode && <S.ErrorText>{errors.zipCode}</S.ErrorText>}
                                </label>

                                <label htmlFor="number">
                                    Número
                                    <S.Input
                                        id="number"
                                        type="text"
                                        value={deliveryData.number}
                                        onChange={(e) =>
                                            setDeliveryData({
                                                ...deliveryData,
                                                number: applyMask(e.target.value, 'addressNumber')
                                            })
                                        }
                                    />
                                    {errors.number && <S.ErrorText>{errors.number}</S.ErrorText>}
                                </label>
                            </S.Row>

                            <label htmlFor="complement">
                                Complemento (opcional)
                                <S.Input
                                    id="complement"
                                    type="text"
                                    value={deliveryData.complement}
                                    onChange={(e) =>
                                        setDeliveryData({
                                            ...deliveryData,
                                            complement: e.target.value
                                        })
                                    }
                                />
                            </label>
                        </S.Form>

                        <S.MainButton type="button" onClick={handleGoToPayment}>
                            Continuar com o pagamento
                        </S.MainButton>

                        <S.SecondaryButton type="button" onClick={() => setStep('cart')}>
                            Voltar para o carrinho
                        </S.SecondaryButton>
                    </>
                )}

                {step === 'payment' && (
                    <>
                        <S.Title>Pagamento - Valor a pagar {formatPrice(total)}</S.Title>

                        <S.Form>
                            <label htmlFor="cardOwner">
                                Nome no cartão
                                <S.Input
                                    id="cardOwner"
                                    type="text"
                                    value={paymentData.cardOwner}
                                    onChange={(e) =>
                                        setPaymentData({
                                            ...paymentData,
                                            cardOwner: e.target.value
                                        })
                                    }
                                />
                                {errors.cardOwner && <S.ErrorText>{errors.cardOwner}</S.ErrorText>}
                            </label>

                            <label htmlFor="cardNumber">
                                Número do cartão
                                <S.Input
                                    id="cardNumber"
                                    type="text"
                                    value={paymentData.cardNumber}
                                    onChange={(e) =>
                                        setPaymentData({
                                            ...paymentData,
                                            cardNumber: applyMask(e.target.value, 'card')
                                        })
                                    }
                                />
                                {errors.cardNumber && <S.ErrorText>{errors.cardNumber}</S.ErrorText>}
                            </label>

                            <S.Row>
                                <label htmlFor="cvv">
                                    CVV
                                    <S.Input
                                        id="cvv"
                                        type="text"
                                        value={paymentData.cvv}
                                        onChange={(e) =>
                                            setPaymentData({
                                                ...paymentData,
                                                cvv: applyMask(e.target.value, 'cvv')
                                            })
                                        }
                                    />
                                    {errors.cvv && <S.ErrorText>{errors.cvv}</S.ErrorText>}
                                </label>

                                <label htmlFor="expiresMonth">
                                    Mês de vencimento
                                    <S.Input
                                        id="expiresMonth"
                                        type="text"
                                        value={paymentData.expiresMonth}
                                        onChange={(e) =>
                                            setPaymentData({
                                                ...paymentData,
                                                expiresMonth: applyMask(e.target.value, 'month')
                                            })
                                        }
                                    />
                                    {errors.expiresMonth && <S.ErrorText>{errors.expiresMonth}</S.ErrorText>}
                                </label>
                            </S.Row>

                            <label htmlFor="expiresYear">
                                Ano de vencimento
                                <S.Input
                                    id="expiresYear"
                                    type="text"
                                    value={paymentData.expiresYear}
                                    onChange={(e) =>
                                        setPaymentData({
                                            ...paymentData,
                                            expiresYear: applyMask(e.target.value, 'year')
                                        })
                                    }
                                />
                                {errors.expiresYear && <S.ErrorText>{errors.expiresYear}</S.ErrorText>}
                            </label>
                        </S.Form>

                        {apiError && <S.ApiError>{apiError}</S.ApiError>}

                        <S.MainButton
                            type="button"
                            onClick={handleFinishPayment}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Finalizando pedido...' : 'Finalizar pagamento'}
                        </S.MainButton>

                        <S.SecondaryButton
                            type="button"
                            onClick={() => setStep('delivery')}
                            disabled={isProcessing}
                        >
                            Voltar para a edição de endereço
                        </S.SecondaryButton>
                    </>
                )}

                {step === 'success' && (
                    <>
                        <S.Title>
                            Pedido realizado - {String(getOrderIdFromResponse(orderResponse) ?? '---')}
                        </S.Title>

                        <S.Text>
                            Estamos felizes em informar que seu pedido já está em processo de
                            preparação e, em breve, será entregue no endereço fornecido.
                        </S.Text>

                        <S.Text>
                            Gostaríamos de ressaltar que nossos entregadores não estão
                            autorizados a realizar cobranças extras.
                        </S.Text>

                        <S.Text>
                            Lembre-se da importância de higienizar as mãos após o recebimento
                            do pedido, garantindo assim sua segurança e bem-estar durante a
                            refeição.
                        </S.Text>

                        <S.Text>
                            Esperamos que desfrute de uma deliciosa e agradável experiência
                            gastronômica. Bom apetite!
                        </S.Text>

                        <S.MainButton type="button" onClick={handleConclude}>
                            Concluir
                        </S.MainButton>
                    </>
                )}
            </S.Sidebar>
        </S.Overlay>
    )
}

export default Cart
