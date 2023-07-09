import styled from 'styled-components';

const TargetingBox = styled.div`
  width: 50px;
  height: 50px;
  border: 4px dashed red;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.$position.y}px;
  left: ${(props) => props.$position.x}px;
  transform: translate(-50%, -50%);
`;

export default TargetingBox;
