import { useEffect } from 'react'
import * as S from './styles'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

const FALLBACK = '/assets/fallback-food.svg'

function Modal({ product, onClose, onAddToCart }) {
  useEffect(() => {
    if (!product) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow || 'auto'
    }
  }, [product])

  if (!product) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.Content onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          decoding="async"
          width="320"
          height="320"
          onError={(e) => {
            e.currentTarget.src = FALLBACK
          }}
        />

        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.serving}</p>

          <button onClick={() => onAddToCart(product)}>
            Adicionar ao carrinho - {formatPrice(product.price)}
          </button>
        </div>
      </S.Content>
    </S.Overlay>
  )
}

export default Modal
