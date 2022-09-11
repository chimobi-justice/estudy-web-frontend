import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: center;
`;

export const AsideLeftWrapper = styled.div`
  width: 20%;
  height: 85vh;
  box-sizing: border-box;
`;

export const AsideLeftBox = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
  padding: 10px 0px 10px 0px; 
  backgroud: #fff;
  border-radius: 9px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center; 
  cursor: pointer;

  &:hover {
    background: rgba(209, 250, 229);
    opacity: 1;
  }
`;

export const AsideRightWrapper = styled.div`
  width: 75%;
  height: 250px;
  padding: 12px;
  backgroud: #fff;
  border-radius: 9px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
