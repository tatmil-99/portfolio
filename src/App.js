import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <>
      <GlobalStyles />
        <AppContainer>
          <button onClick={themeToggler}>Switch Theme</button>
          <Header />
          <Main />
          <Footer />
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
