import React from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import GlobalStyle from "./globalstyle";
import theme from "./theme";

const ThemeProvider = ({ children }) => (
  <ThemeProviderStyled theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  </ThemeProviderStyled>
);

export default ThemeProvider;
