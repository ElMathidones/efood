import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0.6;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.04);
    }
    100% {
        transform: scale(1);
    }
`

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.73);
    z-index: 30;
`

export const Sidebar = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 390px;
    min-height: 100vh;
    background: linear-gradient(180deg, #1f1f1f 0%, #111111 100%);
    padding: 32px 16px 20px;
    color: #ffebd9;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.28);
    animation: ${slideIn} 0.25s ease;
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
`

export const Item = styled.div`
    background: #ffebd9;
    padding: 10px;
    display: grid;
    grid-template-columns: 80px minmax(0, 1fr) 28px;
    gap: 10px;
    color: #e66767;
    border-radius: 8px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 6px;
    }

    h4 {
        font-size: 17px;
        margin-bottom: 6px;
    }

    span {
        font-size: 14px;
        display: block;
        margin-bottom: 8px;
    }

    > div {
        min-width: 0;
    }
`

export const QuantityRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    button {
        width: 24px;
        height: 24px;
        border-radius: 4px;
        background: #e66767;
        color: #ffebd9;
        font-weight: 700;
    }

    strong {
        min-width: 20px;
        text-align: center;
    }
`

export const DeleteButton = styled.button`
    background: transparent;
    align-self: end;
    color: #e66767;
    font-size: 16px;
`

export const Empty = styled.p`
    font-size: 14px;
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const MainButton = styled.button`
    width: 100%;
    background: #ffebd9;
    color: #e66767;
    padding: 10px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    border-radius: 8px;
    animation: ${pulse} 1.8s ease infinite;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        animation: none;
    }
`

export const SecondaryButton = styled(MainButton)`
    background: #f8d7c6;
    animation: none;
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;

    label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 14px;
        font-weight: 700;
        min-width: 0;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 36px;
    border: 1px solid ${({ $hasError }) => ($hasError ? '#ff6b6b' : '#ffebd9')};
    background: ${({ $hasError }) => ($hasError ? '#fff1f1' : '#ffebd9')};
    color: #4b4b4b;
    padding: 0 10px;
    border-radius: 6px;
    box-shadow: ${({ $hasError }) =>
        $hasError ? '0 0 0 2px rgba(255, 107, 107, 0.18)' : 'none'};

    &::placeholder {
        color: #9a8f88;
        opacity: 1;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    width: 100%;

    > * {
        min-width: 0;
    }
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 16px;
`

export const ErrorText = styled.small`
    color: #ff9f9f;
    font-size: 12px;
    margin-top: 2px;
`
