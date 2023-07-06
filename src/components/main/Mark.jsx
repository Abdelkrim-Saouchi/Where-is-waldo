import { styled } from 'styled-components';

const Mark = ({ className }) => {
  return <div className={className}>X</div>;
};

const StyledMark = styled(Mark)`
  color: red;
  font-size: 50px;
  position: absolute;
  top: ${(props) => props.$position.y}px;
  left: ${(props) => props.$position.x}px;
  transform: translate(-50%, -50%);
`;

export default StyledMark;
