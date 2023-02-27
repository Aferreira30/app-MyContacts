import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from "../../assets/styles/globalstyles";
import defaultTheme from "../../assets/styles/themes/default";

import Header from "../Header";
import Rotas from"../../Routes";

import { Container } from "./styles";


function App() {
  return (
<BrowserRouter>
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
      <Container>
        <Header />
        <Rotas />
      </Container>
  </ThemeProvider>
</BrowserRouter>

  );
}

export default App;
