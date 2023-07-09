import styled from 'styled-components';

const Para = styled.p`
  color: white;
  background-color: red;
  font-weight: 600;
  padding: 8px;
`;

const NameErrorMsg = () => {
  return <Para>User Name Not Available. Try another!</Para>;
};

export default NameErrorMsg;
