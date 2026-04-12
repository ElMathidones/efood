import styled from 'styled-components'

export const Wrapper = styled.footer`
    background-color: #ffebd9;
    padding: 40px 0;
    text-align: center;
    color: #e66767;

    img {
        margin: 0 auto;
        display: block;
    }

    p {
        max-width: 480px;
        margin: 16px auto 0;
        font-size: 10px;
        line-height: 22px;
    }
`

export const Icons = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 24px;
        height: 24px;
        display: block;
    }
`
