import { Link } from 'react-router-dom'
import * as S from './styles'

const FALLBACK = '/assets/fallback-food.svg'

function RestaurantCard({ restaurant }) {
  return (
    <S.Card>
      <img
        src={restaurant.cover}
        alt={restaurant.title}
        loading="lazy"
        decoding="async"
        width="472"
        height="217"
        onError={(e) => {
          e.currentTarget.src = FALLBACK
        }}
      />

      <S.Badges>
        <small>{restaurant.category}</small>
        {restaurant.rating >= 4.8 && <small>Destaque da semana</small>}
      </S.Badges>

      <S.Content>
        <S.TitleRow>
          <h3>{restaurant.title}</h3>
          <span>{restaurant.rating} ⭐</span>
        </S.TitleRow>

        <p>{restaurant.description}</p>
        <Link to={`/perfil/${restaurant.id}`}>Saiba mais</Link>
      </S.Content>
    </S.Card>
  )
}

export default RestaurantCard
