import { styled } from 'styled-components';

const Wrapper = styled.div`
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 12px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const Hint = ({ text, className }) => {
  return <Wrapper className={className}>{text}</Wrapper>;
};

export const SuccessHint = styled(Hint)`
  color: white;
  background-color: green;
`;

export const MissedHint = styled(Hint)`
  color: white;
  background-color: red;
`;
