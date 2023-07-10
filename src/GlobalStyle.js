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
        --bg-color: #F5F5F5;
        --Main-Text-Color: #000000;   
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background-color: var(--bg-color);
        color: var(--Main-Text-Color);
    }
    
    .App {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
