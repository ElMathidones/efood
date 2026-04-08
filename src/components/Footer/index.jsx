import * as S from './styles'

function Footer() {
    return (
        <S.Wrapper>
        <div className="container">
            <S.Logo>efood</S.Logo>
            <S.Icons>
            <span>○</span>
            <span>○</span>
            <span>○</span>
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
