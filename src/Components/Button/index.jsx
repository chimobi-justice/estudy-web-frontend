import StyledButton from './styled.button';

const Button = ({ type, handleClick, label, bgColor,size }) => {
  return (
    <StyledButton type={type} onClick={handleClick} color={bgColor} size={size}>
      {label}
    </StyledButton>
  );
};

export default Button;