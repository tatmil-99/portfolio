import './App.css';
import React, { useState} from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Emoji from './components/Emoji';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppContainer = styled(FlexExtended)`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`;

const ThemeBtnDiv = styled(FlexExtended)`
  flex-direction: row;
  justify-content: flex-end;
  margin: 69px 16px 0px 0px;
`;

const ThemeButton = styled.button`
  /* width: 28%; */
  /* width: 105px; */
  width: 8em;
  vertical-align: center;
  text-align: center;
  white-space: nowrap;
  height: 36px;
  border-radius: 18px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  color: rgb(255, 255, 255);
  background: linear-gradient(to right, rgb(103, 54, 221), rgb(252,15,192));
  font-size: .70em;
  font-weight: 500;
  cursor: pointer;
  /* margin-right: 17px; */
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
          <ThemeBtnDiv>
            <ThemeButton 
              onClick={() => [themeToggler(), changeBtnLabel()]}>
                {btnLabel}
                <Emoji symbol={addEmoji(theme)} />
            </ThemeButton>
          </ThemeBtnDiv>
          <Header />
          <Main />
          <Footer />
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
