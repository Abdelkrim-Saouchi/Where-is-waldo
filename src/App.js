import { useEffect, useState } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/main/Modal';
import StartContent from './components/main/StartContent';
import EndContent from './components/main/EndContent';

function App() {
  const [isStarting, setIsStarting] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [Waldo, setWaldo] = useState({
    name: 'Waldo',
    minX: 683,
    maxX: 730,
    minY: 156,
    maxY: 228,
    found: false,
  });
  const [Wizard, setWizard] = useState({
    name: 'Wizard',
    minX: 863,
    maxX: 910,
    minY: 1400,
    maxY: 1445,
    found: false,
  });
  const [Odlaw, setOdlaw] = useState({
    name: 'Odlaw',
    minX: 355,
    maxX: 405,
    minY: 1030,
    maxY: 1095,
    found: false,
  });

  useEffect(() => {
    if (Waldo.found && Wizard.found && Odlaw.found) {
      setIsEnd(true);
    }
  }, [Waldo.found, Wizard.found, Odlaw.found]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header Waldo={Waldo} Wizard={Wizard} Odlaw={Odlaw} />
        <Main
          Waldo={Waldo}
          Wizard={Wizard}
          Odlaw={Odlaw}
          setWaldo={setWaldo}
          setWizard={setWizard}
          setOdlaw={setOdlaw}
        />
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
