import { styled } from 'styled-components';
import CharList from './CharList';
import StyledLogo from './Logo';
import Timer from './Timer';

const StyledHeader = styled.header`
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledLogo />
      <CharList {...props} />
      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
        milliseconds={props.milliseconds}
      />
    </StyledHeader>
  );
};

export default Header;
