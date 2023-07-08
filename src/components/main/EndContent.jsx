import ModalHeader from './ModalHeader';
import Wrapper from './Wrapper';
import ModalPara from './ModalPara';
import Button from './Button';
import UserNameInput from './UserNameInput';
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import ScoreBoard from '../ScoreBoard';

const EndContent = ({ timeFormat, restartGame, time }) => {
  const [userName, setUserName] = useState('');
  const [saved, setSaved] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      try {
        const snap = await getDocs(collection(db, 'scores'));
        const userScores = [];
        snap.forEach((doc) => {
          userScores.push({ id: doc.id, ...doc.data() });
        });

        setScores(userScores);
      } catch (error) {
        console.error(error);
      }
    };
    getScores();
  }, [saved]);

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
      <ScoreBoard scores={scores} />
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
