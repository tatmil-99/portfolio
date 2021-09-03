import './App.css';
import React, { useState} from "react";
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

  // FUNCTION THAT CHANGES BACKGROUND TO DARK OR LIGHT BASED ON STATE
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  
  const [btnLabel, setBtnLabel] = useState('Go Dark');

  // FUNCTION THAT CHANGES THEME BUTTON LABEL TO DARK OR LIGHT BASED ON STATE
  const changeBtnLabel = () => {
    btnLabel === 'Go Dark' ? setBtnLabel('Go Light') : setBtnLabel('Go Dark');
  }

  const addEmoji = (theme) => {
    if (theme === 'light') {
      return '🌜'
    }
    return '🌞'
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <>
      <GlobalStyles />
        <AppContainer>
            <button 
              onClick={() => [themeToggler(), changeBtnLabel()]}>
                {btnLabel}
                <span role="img">{addEmoji(theme)}</span>
            </button>
          <Header />
          <Main />
          <Footer />
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
