import styled from 'styled-components'

export const Wrapper = styled.footer`
    background: linear-gradient(180deg, #ffebd9 0%, #fff2e6 100%);
    padding: 56px 16px;
    margin-top: 120px;
    text-align: center;
    color: #e66767;
    border-top: 1px solid rgba(230, 103, 103, 0.15);

    p {
        max-width: 520px;
        margin: 16px auto 0;
        font-size: 12px;
        line-height: 1.7;
    }
`

export const Logo = styled.div`
    display: inline-block;
    border: 2px solid #e66767;
    padding: 6px 12px;
    font-weight: 800;
    font-size: 24px;
    line-height: 1;
    border-radius: 4px;
`

export const Icons = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 8px;
    font-size: 16px;
`
