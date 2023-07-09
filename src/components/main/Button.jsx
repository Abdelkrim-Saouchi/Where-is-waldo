import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid transparent;
  padding: 8px 16px;
  font-weight: bold;
  font-family: inherit;
  background-color: #808080;
  color: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  &:is(:hover, :focus) {
    background-color: #555555;
    border: 1px solid black;
  }
`;

export default Button;
