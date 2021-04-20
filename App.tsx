import React from 'react';

import { ThemeProvider } from 'styled-components';
import { appTheme } from './src/styles/theme';

import { Welcome } from './src/pages/Welcome';

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
