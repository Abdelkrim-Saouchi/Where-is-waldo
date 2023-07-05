import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box
    }

    .App {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
