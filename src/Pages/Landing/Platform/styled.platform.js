import styled from 'styled-components';

export const Platform = styled.section`
  text-align: center;
  padding: 5rem 0px;
  overflow: auto;
  overflow-y: hidden;
`;

export const PlatformTitle = styled.h3`
  width: 20%;
  margin: 5px auto;
  padding-bottom: 3rem;

  @media screen and (max-width: 765px) {
    width: 90%;
  }
`;

export const PlatformImageWrapper = styled.div`
  width: 80%;
  margin: 0px auto;
`;

export const PlatformImage = styled.img`
  width: 100%;
  height: 150px;
`;
