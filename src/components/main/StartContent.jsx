import { styled } from 'styled-components';
import CharList from '../header/CharList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const StartContent = ({ setIsStarting }) => {
  return (
    <Wrapper>
      <h2>Welcome to The Game</h2>
      <p>Find these Characters as quick as possible</p>
      <CharList />
      <button onClick={() => setIsStarting((prev) => !prev)}>Start</button>
    </Wrapper>
  );
};

export default StartContent;
