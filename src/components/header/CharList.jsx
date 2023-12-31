import styled from 'styled-components';
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

const CharList = ({ Waldo, Wizard, Odlaw }) => {
  return (
    <StyledUL>
      <li>
        <StyledCharCard name="Waldo" imgSrc={waldoImg} $isFound={Waldo.found} />
      </li>
      <li>
        <StyledCharCard
          name="Wizard"
          imgSrc={wizardImg}
          $isFound={Wizard.found}
        />
      </li>
      <li>
        <StyledCharCard name="Odlaw" imgSrc={odlawImg} $isFound={Odlaw.found} />
      </li>
    </StyledUL>
  );
};

export default CharList;
