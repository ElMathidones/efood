import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, sans-serif;
    }

    body {
        background-color: #fff8f2;
        color: #4b4b4b;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        cursor: pointer;
        font-family: inherit;
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
        font-family: inherit;
    }

    .container {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
`

export default GlobalStyles
