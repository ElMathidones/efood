import styled from 'styled-components'

export const Products = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding: 56px 16px 0;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
