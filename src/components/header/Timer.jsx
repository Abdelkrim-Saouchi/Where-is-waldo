import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Bangers', cursive;
  letter-spacing: 5px;
  & span {
    color: red;
  }
`;

const Timer = ({ timeFormat }) => {
  return (
    <Container>
      Time: <span>{timeFormat}</span>
    </Container>
  );
};

export default Timer;
