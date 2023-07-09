import { styled } from 'styled-components';
import { checkCoordinates } from '../../util/checkCoordinates';

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  position: absolute;
  top: ${(props) => props.$position.y}px;
  left: ${(props) => props.$position.x}px;
  background-color: #e9e9e6;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  & li {
    padding: 4px 8px;
  }
  & li:is(:hover, :focus) {
    background-color: #fffdd0;
  }
`;

const SuggestingList = ({
  position,
  Waldo,
  Wizard,
  Odlaw,
  setIsVisible,
  setWaldo,
  setWizard,
  setOdlaw,
  setIsSuccess,
  setIsMissed,
  setHintMsg,
}) => {
  const newPosition = { x: position.x + 30, y: position.y };

  const CheckCharacter = (e) => {
    if (
      e.target.textContent === Waldo.name &&
      checkCoordinates(position, Waldo)
    ) {
      setWaldo({ ...Waldo, found: true });
      setIsSuccess(true);
      setHintMsg('You found Walod! Bravo!');
    } else if (
      e.target.textContent === Wizard.name &&
      checkCoordinates(position, Wizard)
    ) {
      setWizard({ ...Wizard, found: true });
      setIsSuccess(true);
      setHintMsg('You found Wizard! Bravo!');
    } else if (
      e.target.textContent === Odlaw.name &&
      checkCoordinates(position, Odlaw)
    ) {
      setOdlaw({ ...Odlaw, found: true });
      setIsSuccess(true);
      setHintMsg('You found Odlaw! Bravo!');
    } else {
      setIsMissed(true);
      setHintMsg('Keep Searching!');
    }
  };

  return (
    <StyledUL $position={newPosition}>
      <li
        onClick={(e) => {
          CheckCharacter(e);
          setIsVisible((prev) => !prev);
        }}
      >
        Waldo
      </li>
      <li
        onClick={(e) => {
          CheckCharacter(e);
          setIsVisible((prev) => !prev);
        }}
      >
        Wizard
      </li>
      <li
        onClick={(e) => {
          CheckCharacter(e);
          setIsVisible((prev) => !prev);
        }}
      >
        Odlaw
      </li>
    </StyledUL>
  );
};

export default SuggestingList;
