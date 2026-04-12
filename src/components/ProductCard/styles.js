import styled from 'styled-components'

export const Card = styled.article`
    background-color: #e66767;
    padding: 8px;
    color: #ffebd9;

    img {
        width: 100%;
        height: 167px;
        object-fit: cover;
        margin-bottom: 8px;
    }

    h3 {
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 8px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 8px;
        min-height: 88px;
    }

    button {
        width: 100%;
        background-color: #ffebd9;
        color: #e66767;
        padding: 4px 0;
        font-size: 14px;
        font-weight: 700;
    }
`
