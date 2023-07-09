import styled from 'styled-components';

const CharCard = ({ className, name, imgSrc, isFound }) => {
  return (
    <div className={className}>
      <img src={imgSrc} alt="character img" />
      <h4>{name}</h4>
    </div>
  );
};

const StyledCharCard = styled(CharCard)`
  padding: 8px;
  display: flex;
  flex-direction: column;
  algin-center: center;
  width: 60px;
  opacity: ${(props) => (props.isFound ? '0.5' : '1')};
  & img {
    width: 100%;
    height: 44px;
  }
  & h4 {
    margin-top: auto;
    font-size: 14px;
  }
`;

export default StyledCharCard;
