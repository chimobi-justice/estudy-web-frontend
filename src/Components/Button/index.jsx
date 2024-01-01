import StyledButton from './styled.button';

const Button = ({ type, handleClick, label, bgColor,size, disabled }) => {
  return (
    <StyledButton type={type} onClick={handleClick} color={bgColor} size={size} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;