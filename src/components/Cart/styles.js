import styled from 'styled-components'

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
    width: 360px;
    max-width: 100%;
    min-height: 100vh;
    background-color: #e66767;
    padding: 32px 8px 16px;
    color: #ffebd9;

    @media (max-width: 480px) {
        width: 100%;
    }
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
`

export const Item = styled.div`
    background: #ffebd9;
    padding: 8px;
    display: grid;
    grid-template-columns: 80px 1fr 16px;
    gap: 8px;
    color: #e66767;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    h4 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 8px;
    }

    span {
        font-size: 14px;
        display: block;
        margin-bottom: 8px;
    }
`

export const QuantityRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    button {
        width: 22px;
        height: 22px;
        background: #e66767;
        color: #ffebd9;
        font-weight: 700;
    }

    strong {
        min-width: 16px;
        text-align: center;
    }
`

export const DeleteButton = styled.button`
    background: transparent;
    align-self: end;
    color: #e66767;
    font-size: 12px;
`

export const Empty = styled.p`
    font-size: 14px;
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const MainButton = styled.button`
    width: 100%;
    background: #ffebd9;
    color: #e66767;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export const SecondaryButton = styled(MainButton)`
    background: #ffebd9;
`

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 14px;
        font-weight: 700;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 32px;
    border: none;
    background: #ffebd9;
    color: #4b4b4b;
    padding: 0 8px;

    &::placeholder {
        color: #8c8c8c;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
`

export const ErrorText = styled.small`
    color: #fff1f1;
    font-size: 12px;
`

export const ApiError = styled.p`
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 8px;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 16px;
`
