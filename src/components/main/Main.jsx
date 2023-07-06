import { styled } from 'styled-components';
import bgImg from '../../assets/bg-image.jpg';
import TargetingBox from './TargetingBox';
import { useState } from 'react';
import SuggestingList from './SuggestingList';

const StyledMain = styled.main`
  width: 1200px;
  margin: auto;
  min-height: 100vh;
  margin-block: 16px;
  & img {
    width: 100%;
    height: 100%;
  }
  position: relative;
`;

const Main = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const recalculatePosition = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log(`x:${x}, y:${y}`);
    setPosition({ x: x, y: y });
  };

  return (
    <StyledMain>
      <img
        src={bgImg}
        alt="game background img"
        onClick={(e) => {
          recalculatePosition(e);
          setIsVisible(true);
        }}
      />
      {isVisible && (
        <>
          <TargetingBox $position={position} />
          <SuggestingList
            position={position}
            {...props}
            setIsVisible={setIsVisible}
          />
        </>
      )}
    </StyledMain>
  );
};

export default Main;
