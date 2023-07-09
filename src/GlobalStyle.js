import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,700&family=Tangerine:wght@400;700&display=swap');    
    
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

    body {
        font-family: 'Roboto', sans-serif;
    }
    
    .App {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
