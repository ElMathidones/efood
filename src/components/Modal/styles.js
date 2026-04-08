import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 20;
    `

    export const Content = styled.div`
    background: linear-gradient(180deg, #e66767 0%, #d95f5f 100%);
    color: #ffebd9;
    width: 100%;
    max-width: 1024px;
    padding: 32px;
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 24px;
    position: relative;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.28);

    .close {
        position: absolute;
        top: 12px;
        right: 16px;
        background: transparent;
        color: #ffebd9;
        font-size: 28px;
    }

    img {
        width: 100%;
        height: 320px;
        object-fit: cover;
        border-radius: 12px;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }

    p {
        font-size: 15px;
        line-height: 1.7;
        margin-bottom: 16px;
    }

    div button {
        background-color: #ffebd9;
        color: #e66767;
        padding: 10px 14px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 24px;

        img {
        height: 240px;
        }
    }
`
