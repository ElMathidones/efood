import styled from 'styled-components'

export const Wrapper = styled.section`
    padding: 56px 16px 0;

    h1 {
        color: #e66767;
        font-size: 36px;
        margin-bottom: 32px;
    }
`

export const Empty = styled.p`
    color: #e66767;
    font-size: 18px;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Card = styled.article`
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(230, 103, 103, 0.25);
    border-radius: 14px;
    padding: 20px;
    box-shadow: 0 10px 24px rgba(230, 103, 103, 0.08);
`

export const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;

    h2 {
        color: #e66767;
        font-size: 22px;
        margin-bottom: 6px;
    }

    span {
        color: #7a7a7a;
        font-size: 14px;
    }

    strong {
        color: #e66767;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Items = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 18px;

    li {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        color: #4b4b4b;
        font-size: 15px;
        padding-bottom: 8px;
        border-bottom: 1px dashed rgba(230, 103, 103, 0.2);
    }
`

export const Address = styled.div`
    h3 {
        color: #e66767;
        font-size: 18px;
        margin-bottom: 8px;
    }

    p {
        color: #4b4b4b;
        line-height: 1.6;
    }
`
