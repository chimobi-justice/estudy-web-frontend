import styled from 'styled-components';

export const HeroContentTop = styled.h5`
  font-style: italic;
  color: #12b881;

  @media screen and (max-width: 765px){
    text-align: center;
  }
`;

export const HeroContentCenter = styled.h2`
  line-height: 1.1em;
  color: #374440;
`;

export const HeroContentCenterSm = styled(HeroContentCenter)`
  @media screen and (max-width: 765px) {
    font-size: 2.5em;
    text-align: center;
  }

  @media screen and (min-width: 765px) {
    display: none;
  }
`;

export const HeroContentCenterLg = styled(HeroContentCenter)`
  @media screen and (min-width: 765px) {
    font-size: 7em;
  }

  @media screen and (max-width: 765px) {
    display: none;
  }
`;
