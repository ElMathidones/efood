import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    increaseQuantity,
    removeItem
    } from '../../store/reducers/cart'
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

        const numberMonth = Number(month)

        if (numberMonth > 12) return '12'

        return month
    }

    if (type === 'year') {
        return numbers.slice(0, 4)
    }

    return value
    }

    function Cart() {
    const dispatch = useDispatch()
    const { items, isOpen } = useSelector((state) => state.cart)

    const [step, setStep] = useState('cart')
    const [errors, setErrors] = useState({})
    const [isProcessing, setIsProcessing] = useState(false)
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

    const resetStates = () => {
        setStep('cart')
        setErrors({})
        setIsProcessing(false)
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

        if (paymentData.expiresYear.length !== 4) {
        newErrors.expiresYear = 'Ano inválido'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleGoToPayment = () => {
        if (validateDelivery()) {
        setErrors({})
        setStep('payment')
        }
    }

    const handleFinishPayment = () => {
        if (!validatePayment()) return

        setErrors({})
        setIsProcessing(true)

        setTimeout(() => {
        setIsProcessing(false)
        setStep('success')
        }, 1800)
    }

    const handleConclude = () => {
        const orderNumber = Math.floor(Math.random() * 99999)
        const currentOrders = JSON.parse(localStorage.getItem('efood_orders') || '[]')

        const newOrder = {
        orderNumber,
        createdAt: new Date().toISOString(),
        items,
        total,
        delivery: deliveryData
        }

        localStorage.setItem(
        'efood_orders',
        JSON.stringify([...currentOrders, newOrder])
        )

        dispatch(clearCart())
        resetStates()
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
        dispatch(closeCart())
    }

    if (!isOpen) return null

    return (
        <S.Overlay onClick={closeAndReset}>
        <S.Sidebar onClick={(e) => e.stopPropagation()}>
            {step === 'cart' && (
            <>
                <S.Items>
                {items.length > 0 ? (
                    items.map((item) => (
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
                        >
                        🗑
                        </S.DeleteButton>
                    </S.Item>
                    ))
                ) : (
                    <S.Empty>Carrinho vazio.</S.Empty>
                )}
                </S.Items>

                <S.Total>
                <span>Valor total</span>
                <span>{formatPrice(total)}</span>
                </S.Total>

                <S.MainButton
                type="button"
                disabled={items.length === 0}
                onClick={() => setStep('delivery')}
                >
                Continuar com a entrega
                </S.MainButton>
            </>
            )}

            {step === 'delivery' && (
            <>
                <S.Title>Entrega</S.Title>

                <S.Form>
                <label>
                    Quem irá receber
                    <S.Input
                    $hasError={!!errors.receiver}
                    placeholder="Nome"
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

                <label>
                    Endereço
                    <S.Input
                    $hasError={!!errors.address}
                    placeholder="Rua, Avenida..."
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

                <label>
                    Cidade
                    <S.Input
                    $hasError={!!errors.city}
                    placeholder="Cidade"
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
                    <label>
                    CEP
                    <S.Input
                        $hasError={!!errors.zipCode}
                        placeholder="Ex.: 00000-000"
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

                    <label>
                    Número
                    <S.Input
                        $hasError={!!errors.number}
                        placeholder="Ex.: 123"
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

                <label>
                    Complemento (opcional)
                    <S.Input
                    placeholder="Ex.: Apto 302"
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
                <label>
                    Nome no cartão
                    <S.Input
                    $hasError={!!errors.cardOwner}
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

                <label>
                    Número do cartão
                    <S.Input
                    $hasError={!!errors.cardNumber}
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
                    <label>
                    CVV
                    <S.Input
                        $hasError={!!errors.cvv}
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

                    <label>
                    Mês de vencimento
                    <S.Input
                        $hasError={!!errors.expiresMonth}
                        value={paymentData.expiresMonth}
                        onChange={(e) =>
                        setPaymentData({
                            ...paymentData,
                            expiresMonth: applyMask(e.target.value, 'month')
                        })
                        }
                    />
                    {errors.expiresMonth && (
                        <S.ErrorText>{errors.expiresMonth}</S.ErrorText>
                    )}
                    </label>
                </S.Row>

                <label>
                    Ano de vencimento
                    <S.Input
                    $hasError={!!errors.expiresYear}
                    value={paymentData.expiresYear}
                    onChange={(e) =>
                        setPaymentData({
                        ...paymentData,
                        expiresYear: applyMask(e.target.value, 'year')
                        })
                    }
                    />
                    {errors.expiresYear && (
                    <S.ErrorText>{errors.expiresYear}</S.ErrorText>
                    )}
                </label>
                </S.Form>

                <S.MainButton
                type="button"
                onClick={handleFinishPayment}
                disabled={isProcessing}
                >
                {isProcessing ? 'Processando pagamento...' : 'Finalizar pagamento'}
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
                <S.Title>Pedido realizado com sucesso</S.Title>

                <S.Text>
                Seu pedido foi registrado e também foi salvo em “Meus pedidos”.
                </S.Text>

                <S.Text>
                Você pode acompanhar o histórico das compras diretamente pelo menu.
                </S.Text>

                <S.MainButton type="button" onClick={handleConclude}>
                Concluir
                </S.MainButton>
            </>
            )}
        </S.Sidebar>
        </S.Overlay>
    )}

export default Cart
