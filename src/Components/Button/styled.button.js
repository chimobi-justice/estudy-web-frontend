import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) =>
    props.color === 'primary'
      ? '#11a789'
      : props.color === 'secondary'
      ? 'white'
      : props.color === 'default'
      ? '#fff'
      : ''};
  padding: 8px 10px;
  color: ${(props) =>
    props.color === 'primary'
      ? 'white'
      : props.color === 'secondary'
      ? '#11a789'
      : ''};
  border-radius: 6px;
  border: ${(props) =>
    props.color === 'primary'
      ? '1px solid #11a789'
      : props.color === 'secondary'
      ? '1px solid #11a789'
      : ''};

  width: ${(props) =>
    props.size === 'large'
      ? '100%'
      : props.size === 'small'
      ? ''
      : ''};
  font-size: 14px;
  &:hover {
    color: ${(props) =>
      props.color === 'primary'
        ? 'white'
        : props.color === 'secondary'
        ? 'white'
        : ''};
    background: ${(props) =>
      props.color === 'primary'
        ? '#09ae8d'
        : props.color === 'secondary'
        ? '#11a789'
        : props.color === 'default'
        ? '#f7f7f7'
        : ''};
  }
`;

export default StyledButton;