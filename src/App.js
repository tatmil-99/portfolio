import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
