import { useEffect, useState } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/main/Modal';
import StartContent from './components/main/StartContent';
import EndContent from './components/main/EndContent';
import { useCharacter } from './util/useCharacter';
import { timeFormatter } from './util/timeFormatter';

function App() {
  const [isStarting, setIsStarting] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [Waldo, setWaldo] = useCharacter('waldo');
  const [Wizard, setWizard] = useCharacter('wizard');
  const [Odlaw, setOdlaw] = useCharacter('odlaw');

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeFormat = timeFormatter(time);

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
            <EndContent
              timeFormat={timeFormat}
              restartGame={restartGame}
              time={time}
            />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
