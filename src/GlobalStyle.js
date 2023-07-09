import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box
    }

    :root {
        --bg-color: #360568;
        --secondary-color: #5B2A86;
        --accent-color: #A5E6BA;
    }

    .App {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
