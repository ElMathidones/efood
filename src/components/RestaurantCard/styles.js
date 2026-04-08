import styled from 'styled-components'

export const Card = styled.article`
    border: 1px solid rgba(230, 103, 103, 0.4);
    background-color: rgba(255, 255, 255, 0.75);
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(230, 103, 103, 0.08);
    transition:
        transform 0.22s ease,
        box-shadow 0.22s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 36px rgba(230, 103, 103, 0.16);
    }

    > img {
        width: 100%;
        height: 220px;
        object-fit: cover;
    }
    `

    export const Content = styled.div`
    padding: 14px;
    color: #e66767;

    p {
        font-size: 14px;
        line-height: 1.6;
        margin: 12px 0 18px;
        min-height: 72px;
    }

    a {
        display: inline-block;
        background: linear-gradient(180deg, #e66767, #d95f5f);
        color: #ffebd9;
        padding: 8px 12px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 6px;
        transition: opacity 0.2s ease;

        &:hover {
        opacity: 0.92;
        }
    }
`

export const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;

    h3,
    span {
        font-size: 22px;
        font-weight: 700;
    }
`

export const Badges = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;

    small {
        background-color: #e66767;
        color: #ffebd9;
        padding: 6px 8px;
        font-size: 12px;
        font-weight: 700;
        border-radius: 4px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.12);
    }
`
