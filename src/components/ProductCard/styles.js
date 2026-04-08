import styled from 'styled-components'

export const Card = styled.article`
    background: linear-gradient(180deg, #e66767 0%, #dc5f5f 100%);
    padding: 10px;
    color: #ffebd9;
    border-radius: 12px;
    box-shadow: 0 14px 28px rgba(230, 103, 103, 0.18);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 18px 32px rgba(230, 103, 103, 0.24);
    }

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        margin-bottom: 10px;
        border-radius: 8px;
    }

    h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 8px;
    }

    p {
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 12px;
        min-height: 68px;
    }

    button {
        width: 100%;
        background-color: #ffebd9;
        color: #e66767;
        padding: 10px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 8px;
    }
`
