import { useState } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/main/Modal';
import StartContent from './components/main/StartContent';
import EndContent from './components/main/EndContent';

function App() {
  const [isStarting, setIsStarting] = useState(false);
  const [isEnd, setIsEnd] = useState(true);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Main />
        {isStarting && (
          <Modal>
            <StartContent setIsStarting={setIsStarting} />
          </Modal>
        )}
        {isEnd && (
          <Modal>
            <EndContent setIsEnd={setIsEnd} />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
