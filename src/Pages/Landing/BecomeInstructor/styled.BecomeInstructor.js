import styled from 'styled-components';

export const BecomeInstructorWrapper = styled.section`
  margin: 10px 0px;
`;

export const BecomeInstructorHolder = styled.div`
  width: 40%;
  margin: 35px auto;
  display: flex;
  flex-direction: row;
  justify-self: center;

  @media screen and (max-width: 765px) {
    flex-direction: column;
    justify-self: center;
    width: 90%;
  }
`;

export const BecomeInstructorContentBox = styled.div`
  background: #817aff;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  padding: 20px;
  height: 300px;
  position: relative;
  top: 20px;

  @media screen and (max-width: 765px) {
    border-bottom-left-radius: 0px;
  }
`;

export const BecomeInstructorImageBox = styled.div`
  background: #ffdbe1;
  border-radius: 35px;
  padding: 15px;
  height: 350px;

  @media screen and (max-width: 765px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    height: auto;
  }
`;
