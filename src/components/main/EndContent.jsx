import ModalHeader from './ModalHeader';
import Wrapper from './Wrapper';
import ModalPara from './ModalPara';
import Button from './Button';
import UserNameInput from './UserNameInput';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const EndContent = ({ timeFormat, restartGame, time }) => {
  const [userName, setUserName] = useState('');
  const [saved, setSaved] = useState(false);

  const saveUserScore = async () => {
    try {
      await setDoc(doc(db, 'scores', userName), {
        user: userName,
        timeInSec: time,
      });
      setSaved(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Wrapper>
      <ModalHeader>You Finished The Game in {timeFormat}</ModalHeader>
      <ModalPara>
        Enter your User name to save your score on Leaderboard
      </ModalPara>
      <UserNameInput
        type="text"
        placeholder="USERNAME"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      {saved ? (
        <Button>Saved</Button>
      ) : (
        <Button onClick={saveUserScore}>Save</Button>
      )}
      <h3>Scores Rank</h3>
      <div>
        <ul>
          <li>lionel Messi</li>
          <li>Cristiano Ronaldo</li>
          <li>Karim Benzema</li>
          <li>Ronaldo</li>
          <li>David Beckham</li>
        </ul>
      </div>
      <Button
        onClick={() => {
          restartGame();
        }}
      >
        Restart
      </Button>
    </Wrapper>
  );
};

export default EndContent;
