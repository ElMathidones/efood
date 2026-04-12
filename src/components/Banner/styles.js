import styled from 'styled-components'

export const HomeBanner = styled.section`
    background-color: #fff8f2;
    background-image: url('/assets/pattern-utensils.svg');
    background-repeat: repeat;
    padding: 64px 0 80px;
    text-align: center;

    h2 {
        max-width: 540px;
        margin: 0 auto;
        color: #e66767;
        font-size: 36px;
        font-weight: 900;
        line-height: 1.35;
    }
`

export const ProfileBanner = styled.section`
    height: 280px;
    background-size: cover;
    background-position: center;

    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        padding: 24px 0 32px;
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    span,
    h2 {
        color: #fff;
    }

    span {
        font-size: 32px;
        font-weight: 100;
    }

    h2 {
        font-size: 32px;
        font-weight: 900;
    }
`
