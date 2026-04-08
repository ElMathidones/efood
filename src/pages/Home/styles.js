import styled from 'styled-components'

export const ListSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 32px;
    padding: 72px 16px 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const FloatingCartButton = styled.button`
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 12;
    background: #e66767;
    color: #ffebd9;
    border-radius: 999px;
    padding: 14px 18px;
    font-weight: 700;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
`
