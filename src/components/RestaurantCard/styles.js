import styled from 'styled-components'

export const Card = styled.article`
    border: 1px solid #e66767;
    background-color: #fff;
    position: relative;
    overflow: hidden;

    > img {
        width: 100%;
        height: 217px;
        object-fit: cover;
    }
`

export const Content = styled.div`
    padding: 8px;
    color: #e66767;

    p {
        font-size: 14px;
        line-height: 22px;
        margin: 16px 0;
        min-height: 88px;
    }

    a {
        display: inline-block;
        background-color: #e66767;
        color: #ffebd9;
        padding: 4px 6px;
        font-size: 14px;
        font-weight: 700;
    }
`

export const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3,
    span {
        font-size: 18px;
        font-weight: 700;
    }
`

export const Badges = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;

    small {
        background-color: #e66767;
        color: #ffebd9;
        padding: 6px 8px;
        font-size: 12px;
        font-weight: 700;
    }
`
