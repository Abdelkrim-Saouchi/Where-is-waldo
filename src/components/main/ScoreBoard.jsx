import styled from 'styled-components';
import { timeFormatter } from '../../util/timeFormatter';

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: scroll;
`;

const StyledTable = styled.table`
  width: 100%;
  font-family: inherit;
`;

const StyledRow = styled.tr`
  background-color: white;
  & * {
    font-family: inherit;
    font-weight: 700;
    text-align: left;
    padding: 8px;
  }
`;

const ScoreBoard = ({ scores }) => {
  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <StyledRow>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </StyledRow>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <StyledRow key={score.id}>
              <td>{index + 1}</td>
              <td>{score.user}</td>
              <td>{timeFormatter(score.timeInSec)}</td>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default ScoreBoard;
