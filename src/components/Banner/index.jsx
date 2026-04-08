import * as S from './styles'

function Banner({ image, category, title, home = false }) {
    if (home) {
        return (
        <S.HomeBanner>
            <div className="container">
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
            </div>
        </S.HomeBanner>
        )
    }

    return (
        <S.ProfileBanner style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay">
            <div className="container">
            <span>{category}</span>
            <h2>{title}</h2>
            </div>
        </div>
        </S.ProfileBanner>
    )}

export default Banner
