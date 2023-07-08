import ModalHeader from './ModalHeader';
import Wrapper from './Wrapper';
import ModalPara from './ModalPara';
import Button from './Button';
import UserNameInput from './UserNameInput';
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import ScoreBoard from '../ScoreBoard';
import { sortArray } from '../../util/sortArray';
import NameErrorMsg from './NameErrorMsg';

const EndContent = ({ timeFormat, restartGame, time }) => {
  const [userName, setUserName] = useState('');
  const [saved, setSaved] = useState(false);
  const [scores, setScores] = useState([]);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const getScores = async () => {
      try {
        const snap = await getDocs(collection(db, 'scores'));
        const userScores = [];
        snap.forEach((doc) => {
          userScores.push({ id: doc.id, ...doc.data() });
        });
        const sortedUserScores = sortArray(userScores);
        setScores(sortedUserScores);
      } catch (error) {
        console.error(error);
      }
    };
    getScores();
  }, [saved]);

  const saveUserScore = async () => {
    if (userName === '') return;
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

  const isUserNameAvailable = (name) => {
    console.log('check scores:', scores);
    return !scores.some((score) => score.user === name);
  };

  const checkUserNameAvailability = (name) => {
    if (isUserNameAvailable(name)) {
      console.log('name available');
      setAvailable(true);
    } else {
      console.log('name not available');
      setAvailable(false);
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
        onChange={(e) => {
          setUserName(e.target.value);
          checkUserNameAvailability(e.target.value);
        }}
        value={userName}
      />
      {!available && <NameErrorMsg />}
      {saved ? (
        <Button>Saved</Button>
      ) : (
        available && <Button onClick={saveUserScore}>Save</Button>
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
