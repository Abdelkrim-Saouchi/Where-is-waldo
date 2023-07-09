import { styled } from 'styled-components';
import bgImg from '../../assets/bg-image.jpg';
import TargetingBox from './TargetingBox';
import { memo, useEffect, useState } from 'react';
import SuggestingList from './SuggestingList';
import StyledMark from './Mark';
import { MissedHint, SuccessHint } from './Hint';

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

// used memo here to prevent unnecessary rerendering of Main if time changed in the parent component
const Main = memo((props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMissed, setIsMissed] = useState(false);
  const [hintMsg, setHintMsg] = useState('');

  const recalculatePosition = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x: x, y: y });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
      setIsMissed(false);
    }, 2000);
  }, [isMissed, isSuccess]);

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
            setIsSuccess={setIsSuccess}
            setIsMissed={setIsMissed}
            setHintMsg={setHintMsg}
          />
        </>
      )}
      {props.Waldo.found && (
        <StyledMark
          $position={{
            x: (props.Waldo.maxX + props.Waldo.minX) / 2,
            y: (props.Waldo.maxY + props.Waldo.minY) / 2,
          }}
        />
      )}
      {props.Wizard.found && (
        <StyledMark
          $position={{
            x: (props.Wizard.maxX + props.Wizard.minX) / 2,
            y: (props.Wizard.maxY + props.Wizard.minY) / 2,
          }}
        />
      )}
      {props.Odlaw.found && (
        <StyledMark
          $position={{
            x: (props.Odlaw.maxX + props.Odlaw.minX) / 2,
            y: (props.Odlaw.maxY + props.Odlaw.minY) / 2,
          }}
        />
      )}
      {isSuccess && <SuccessHint text={hintMsg} />}
      {isMissed && <MissedHint text={hintMsg} />}
    </StyledMain>
  );
});

export default Main;
