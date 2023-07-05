import styled from 'styled-components';

const Logo = ({ className }) => {
  return (
    <h1 className={className}>
      Where's <span>Waldo</span>
    </h1>
  );
};

const StyledLogo = styled(Logo)`
  span {
    color: red;
  }
`;

export default StyledLogo;
