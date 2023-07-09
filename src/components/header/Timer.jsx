import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
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
