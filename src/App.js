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
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    if (Waldo.found && Wizard.found && Odlaw.found) {
      setIsEnd(true);
      setIsRunning((prev) => !prev);
    }
  }, [Waldo.found, Wizard.found, Odlaw.found]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const timeFormat = `${hours}:${minutes.toString().padStart(2, '0')}:
  ${seconds.toString().padStart(2, '0')}:
  ${milliseconds.toString().padStart(2, '0')}`;

  const startStopTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setTime(0);
  };

  const restartGame = () => {
    setIsStarting(true);
    setIsEnd(false);
    setWaldo({ ...Waldo, found: false });
    setWizard({ ...Wizard, found: false });
    setOdlaw({ ...Odlaw, found: false });
    resetTimer();
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header
          Waldo={Waldo}
          Wizard={Wizard}
          Odlaw={Odlaw}
          timeFormat={timeFormat}
        />
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
            <StartContent
              setIsStarting={setIsStarting}
              startStopTimer={startStopTimer}
            />
          </Modal>
        )}
        {isEnd && (
          <Modal>
            <EndContent timeFormat={timeFormat} restartGame={restartGame} />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
