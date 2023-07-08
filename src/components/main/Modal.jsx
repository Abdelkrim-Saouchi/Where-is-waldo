import { styled } from 'styled-components';

const ModalWrapper = styled.div`
  width: 600px;
  background-color: #e9e9e6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 16px;
  box-shadow: 13px 6px 11px 0px rgba(0, 0, 0, 0.5);
`;

const Modal = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};

export default Modal;
