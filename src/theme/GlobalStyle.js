import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,:before,:after{
        padding: 0;
        margin: 0;
    }

    body {
        box-sizing: border-box;
        font-family: 'Press Start 2P', cursive;
        color: var(--main-grey)
    }
`

export default GlobalStyle;