import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme'
import LoginPage from './LoginPage'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage/>
    </ThemeProvider>
  );
}

export default App;
