import styled from 'styled-components'

export const HomeBanner = styled.section`
    background-color: #fff1e6;
    background-image: url('/assets/pattern-utensils.svg');
    background-repeat: repeat;
    padding: 96px 16px;
    text-align: center;

    h2 {
        max-width: 620px;
        margin: 0 auto;
        color: #e66767;
        font-size: 48px;
        font-weight: 900;
        line-height: 1.25;
    }

    @media (max-width: 768px) {
        padding: 72px 16px;

        h2 {
        font-size: 34px;
        }
    }
`

export const ProfileBanner = styled.section`
    height: 320px;
    background-size: cover;
    background-position: center;

    .overlay {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6));
        height: 100%;
        padding: 24px 16px;
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
        font-size: 24px;
        font-weight: 300;
    }

    h2 {
        font-size: 38px;
        font-weight: 900;
    }

    @media (max-width: 768px) {
        height: 260px;

        h2 {
        font-size: 28px;
        }
    }
`
