import { Link } from 'react-router-dom'
import * as S from './styles'

function CartSvg() {
    return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
            d="M10 12H16L21 38H47L54 20H24"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <circle cx="25" cy="50" r="4" fill="currentColor" />
        <circle cx="45" cy="50" r="4" fill="currentColor" />
        </svg>
    )
    }

    function Header({ isProfile = false, cartCount = 0, onOpenCart }) {
    return (
        <S.Wrapper>
        <div className="container">
            {isProfile ? (
            <S.ProfileBar>
                <S.LeftGroup>
                <Link to="/">Restaurantes</Link>
                <Link to="/pedidos">Meus pedidos</Link>
                </S.LeftGroup>

                <S.Logo to="/">
                <img src="/assets/logo-efood.svg" alt="efood" />
                </S.Logo>

                <S.CartIconButton type="button" onClick={onOpenCart}>
                <CartSvg />
                {cartCount > 0 && <S.CartBadge>{cartCount}</S.CartBadge>}
                </S.CartIconButton>
            </S.ProfileBar>
            ) : (
            <S.HomeBar>
                <S.Logo to="/">
                <img src="/assets/logo-efood.svg" alt="efood" />
                </S.Logo>

                <S.HomeActions>
                <Link to="/pedidos">Meus pedidos</Link>

                <S.CartIconButton type="button" onClick={onOpenCart}>
                    <CartSvg />
                    {cartCount > 0 && <S.CartBadge>{cartCount}</S.CartBadge>}
                </S.CartIconButton>
                </S.HomeActions>
            </S.HomeBar>
            )}
        </div>
        </S.Wrapper>
    )}

export default Header
