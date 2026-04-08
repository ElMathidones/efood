import * as S from './styles'

const FALLBACK = '/assets/fallback-food.svg'

function ProductCard({ product, onOpenModal }) {
  return (
    <S.Card>
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
        width="320"
        height="180"
        onError={(e) => {
          e.currentTarget.src = FALLBACK
        }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => onOpenModal(product)}>Mais detalhes</button>
    </S.Card>
  )
}

export default ProductCard
