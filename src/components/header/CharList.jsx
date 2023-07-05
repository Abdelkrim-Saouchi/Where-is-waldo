import { styled } from 'styled-components';
import StyledCharCard from './CharCard';
import waldoImg from '../../assets/waldo.jpg';
import wizardImg from '../../assets/wizard.jpg';
import odlawImg from '../../assets/odlaw.jpg';

const StyledUL = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
`;

const CharList = () => {
  return (
    <StyledUL>
      <li>
        <StyledCharCard name="Waldo" imgSrc={waldoImg} />
      </li>
      <li>
        <StyledCharCard name="Wizard" imgSrc={wizardImg} />
      </li>
      <li>
        <StyledCharCard name="Odlaw" imgSrc={odlawImg} />
      </li>
    </StyledUL>
  );
};

export default CharList;
