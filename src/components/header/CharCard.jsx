import { styled } from 'styled-components';

const CharCard = ({ className, name, imgSrc }) => {
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
