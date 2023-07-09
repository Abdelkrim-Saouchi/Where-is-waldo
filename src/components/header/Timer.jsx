import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Bangers', cursive;
  letter-spacing: 5px;
`;

const Timer = ({ timeFormat }) => {
  return <Container>Time: {timeFormat}</Container>;
};

export default Timer;
