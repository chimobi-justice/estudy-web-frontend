import StyledButton from './styled.button';

const Button = ({ type, handleClick, label, bgColor }) => {
  return (
    <StyledButton type={type} onClick={handleClick} color={bgColor}>
      {label}
    </StyledButton>
  );
};

export default Button;
