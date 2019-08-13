import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: ${theme('fonts.text')}
  }

  #root {
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  a:focus {
    text-decoration: none;
  }
`;

export default GlobalStyle;
