import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const EndContent = ({ setIsEnd }) => {
  return (
    <Wrapper>
      <h2>You Finished The Game in 4:00</h2>
      <p>Enter your User name to save your score on Leaderboard</p>
      <input type="text" placeholder="USERNAME" />
      <h3>Scores Rank</h3>
      <div>
        <ul>
          <li>lionel Messi</li>
          <li>Cristiano Ronaldo</li>
          <li>Karim Benzema</li>
          <li>Ronaldo</li>
          <li>David Beckham</li>
        </ul>
      </div>
      <button onClick={() => setIsEnd((prev) => !prev)}>Restart</button>
    </Wrapper>
  );
};

export default EndContent;
