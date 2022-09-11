import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AsideLeftWrapper = styled.div`
  position: sticky;
  top: 40px;
  width: 23%;
  height: 85vh;
  padding: 10px;
  border-radius: 9px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  overflow-Y: scroll;
  overflow-X: hidden;
`;

export const AsideRightWrapper = styled.div`
  width: 75%;
  padding: 12px;
`;

export const AsideRightContainer = styled.div`
  padding: 10px;
`;

export const AsideRightHeader = styled.header`
  position: sticky;
  top: 40px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  z-index: 99999;
`;

export const StudentChatBoard = styled.div`
  height: 400px;
  overflow-Y: scroll;
  overflow-X: hidden;
`;

export const AsideRightFooter = styled.footer`
  position: fixed;
  bottom: 15px;
  width: 58%;
  background: #fff;
  display: flex;
  padding: 10px;
  border-radius: 9px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  z-index: 99999;
`;
