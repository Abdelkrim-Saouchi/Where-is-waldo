import { styled } from 'styled-components';

const Button = styled.button`
  border: 1px solid transparent;
  padding: 8px 16px;
  font-weight: bold;
  background-color: #fffdd0;
  border-radius: 12px;
  cursor: pointer;
  &:is(:hover, :focus) {
    opacity: 0.7;
    border: 1px solid black;
  }
`;

export default Button;
