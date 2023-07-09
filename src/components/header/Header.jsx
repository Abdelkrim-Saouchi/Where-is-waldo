import styled from 'styled-components';
import CharList from './CharList';
import StyledLogo from './Logo';
import Timer from './Timer';

const StyledHeader = styled.header`
  background-color: #f7f7f7;
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
      <Timer timeFormat={props.timeFormat} />
    </StyledHeader>
  );
};

export default Header;
