import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './theme/provider';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
