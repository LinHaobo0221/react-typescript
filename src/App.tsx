import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Page from './Page';
import { Container } from './styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Page />
    </Container>
  </ThemeProvider>
);
export default App;
