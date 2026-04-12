import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
    background-color: #fff8f2;
    background-image: url('/assets/pattern-utensils.svg');
    background-repeat: repeat;
    padding: 24px 0;
`

export const HomeBar = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
`

export const LeftSpacer = styled.div`
    justify-self: start;
`

export const CenterLogo = styled.div`
    display: flex;
    justify-content: center;
`

export const RightActions = styled.div`
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 24px;

    a,
    button {
        color: #e66767;
        font-size: 18px;
        font-weight: 700;
    }
`

export const ProfileBar = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;

    a {
        color: #e66767;
        font-size: 18px;
        font-weight: 700;
    }
`

export const LeftGroup = styled.div`
    justify-self: start;
    display: flex;
    align-items: center;
    gap: 24px;
`

export const CenterGroup = styled.div`
    display: flex;
    justify-content: center;
`

export const RightGroup = styled.div`
    justify-self: end;
`

export const Logo = styled(Link)`
    display: inline-flex;

    img {
        width: 125px;
        height: auto;
        display: block;
    }
`

export const CartIconButton = styled.button`
    position: relative;
    background: transparent;
    border: none;
    padding: 0;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;

    svg {
        width: 24px;
        height: 24px;
        display: block;
    }
`

export const CartBadge = styled.span`
    position: absolute;
    top: -8px;
    right: -10px;
    font-size: 12px;
    font-weight: 700;
    color: #e66767;
    background: transparent;
`
