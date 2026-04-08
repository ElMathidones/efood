import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const badgePop = keyframes`
    0% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1.08);
    }
    100% {
        transform: scale(1);
    }
`

export const Wrapper = styled.header`
    background-color: #fff1e6;
    background-image: url('/assets/pattern-utensils.svg');
    background-repeat: repeat;
    padding: 24px 16px;
    border-bottom: 1px solid rgba(230, 103, 103, 0.15);
`

export const HomeBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const HomeActions = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    a {
        color: #e66767;
        font-size: 16px;
        font-weight: 700;
        background: transparent;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ProfileBar = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 16px;

    a {
        color: #e66767;
        font-size: 18px;
        font-weight: 700;
        background: transparent;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`

export const LeftGroup = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        justify-content: center;
    }
`

export const Logo = styled(Link)`
    display: inline-flex;
    justify-self: center;

    img {
        width: 120px;
        height: auto;
        display: block;
    }
`

export const CartIconButton = styled.button`
    position: relative;
    justify-self: end;
    background: transparent;
    width: 48px;
    height: 48px;
    border: none;
    padding: 0;
    color: #111111;

    svg {
        width: 34px;
        height: 34px;
        display: block;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        justify-self: center;
    }
`

export const CartBadge = styled.span`
    position: absolute;
    top: -4px;
    right: -4px;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    border-radius: 999px;
    background: #ffffff;
    color: #ff5a36;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ff5a36;
    animation: ${badgePop} 0.35s ease;
`
