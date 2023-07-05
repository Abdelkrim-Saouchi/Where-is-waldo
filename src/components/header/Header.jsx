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

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <CharList />
      <Timer />
    </StyledHeader>
  );
};

export default Header;
