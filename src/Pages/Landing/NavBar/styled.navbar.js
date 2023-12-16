import styled from 'styled-components';

export const DesktopNavBar = styled.header`
  @media screen and (max-width: 765px) {
    display: none;
  }

  @media screen and (min-width: 765px) {
    display: block;
  }
`;

export const MobileNavBar = styled.header`
  @media screen and (max-width: 765px) {
    display: block;
  }

  @media screen and (min-width: 765px) {
    display: none;
  }
`;
