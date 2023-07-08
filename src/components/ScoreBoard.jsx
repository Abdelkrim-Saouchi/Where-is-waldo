import { styled } from 'styled-components';
import { timeFormatter } from '../util/timeFormatter';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledTable = styled.table`
  width: 100%;
`;

const StyledRow = styled.tr`
  background-color: white;
  & * {
    text-align: left;
    padding: 8px;
  }
`;

const ScoreBoard = ({ scores }) => {
  return (
    <Wrapper>
      <StyledTable>
        <StyledRow>
          <th>Rank</th> <th>Name</th>
          <th>Time</th>
        </StyledRow>
        {scores.map((score, index) => (
          <StyledRow key={score.id}>
            <td>{index + 1}</td>
            <td>{score.user}</td> <td>{timeFormatter(score.timeInSec)}</td>
          </StyledRow>
        ))}
      </StyledTable>
    </Wrapper>
  );
};

export default ScoreBoard;
