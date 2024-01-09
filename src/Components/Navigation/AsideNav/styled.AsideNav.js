import styled from 'styled-components';

export const AsideNavWrapper = styled.aside`
  background: #fff;
  height: 95vh;
  border-radius: 35px;
  position: fixed;
  width: 16%;

  .active {
    opacity: 1;
    background: rgba(209, 250, 229);
    border-left: 3px solid green;
  }
`;
