import ModalHeader from './ModalHeader';
import Wrapper from './Wrapper';
import ModalPara from './ModalPara';
import Button from './Button';
import UserNameInput from './UserNameInput';

const EndContent = ({
  setIsEnd,
  startStopTimer,
  hours,
  minutes,
  seconds,
  milliseconds,
  resetTimer,
}) => {
  return (
    <Wrapper>
      <ModalHeader>
        You Finished The Game in {hours}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </ModalHeader>
      <ModalPara>
        Enter your User name to save your score on Leaderboard
      </ModalPara>
      <UserNameInput type="text" placeholder="USERNAME" />
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
          setIsEnd((prev) => !prev);
          startStopTimer();
          resetTimer();
        }}
      >
        Restart
      </Button>
    </Wrapper>
  );
};

export default EndContent;
