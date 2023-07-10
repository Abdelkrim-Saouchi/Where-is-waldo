import { styled } from 'styled-components';

const Container = styled.div`
  background-color: var(--bg-color);
  border: 2px double black;
  font-family: 'Bangers', cursive;
  letter-spacing: 5px;
  padding: 8px 16px;
  position: absolute;
  bottom: 4px;
  right: 0;

  a {
    text-decoration: none;
    font-weight: 600;
  }

  a:is(:hover, :focus) {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      Copyright&copy; <a href="https://github.com/karim-saou">Krimothiazine</a>
    </Container>
  );
};

export default Footer;
