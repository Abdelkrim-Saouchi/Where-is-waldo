import { styled } from 'styled-components';
import bgImg from '../../assets/bg-image.jpg';

const StyledMain = styled.main`
  width: 1200px;
  margin: auto;
  min-height: 100vh;
  margin-block: 16px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <img src={bgImg} alt="game background img" />
    </StyledMain>
  );
};

export default Main;
