import * as S from './styles'

function Footer() {
    return (
        <S.Wrapper>
        <div className="container">
            <img src="/assets/logo-efood.svg" alt="efood" />

            <S.Icons>
            <a href="#" aria-label="Instagram">
                <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="Facebook">
                <img src="/assets/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
                <img src="/assets/twitter.svg" alt="Twitter" />
            </a>
            </S.Icons>

            <p>
            A efood é uma plataforma para divulgação de estabelecimentos. A
            responsabilidade pela entrega e pela qualidade dos produtos é do
            estabelecimento contratado.
            </p>
        </div>
        </S.Wrapper>
    )}

export default Footer
