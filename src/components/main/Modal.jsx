import { styled } from 'styled-components';

const ModalWrapper = styled.div`
  background-color: #e9e9e6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 16px;
`;

const Modal = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};

export default Modal;
