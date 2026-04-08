import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: linear-gradient(180deg, #fff8f2 0%, #fff1e6 100%);
        color: #4b4b4b;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        cursor: pointer;
    }

    img {
        display: block;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    input {
        outline: none;
    }

    .container {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
`

export default GlobalStyles
