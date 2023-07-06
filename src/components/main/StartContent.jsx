import CharList from '../header/CharList';
import Wrapper from './Wrapper';
import ModalHeader from './ModalHeader';
import ModalPara from './ModalPara';
import Button from './Button';

const StartContent = ({ setIsStarting, startStopTimer }) => {
  return (
    <Wrapper>
      <ModalHeader>Welcome to The Game</ModalHeader>
      <ModalPara>Find these Characters as quick as possible</ModalPara>
      <CharList
        Waldo={{ found: false }}
        Wizard={{ found: false }}
        Odlaw={{ found: false }}
      />
      <Button
        onClick={() => {
          setIsStarting((prev) => !prev);
          startStopTimer();
        }}
      >
        Start
      </Button>
    </Wrapper>
  );
};

export default StartContent;
