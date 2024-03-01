import styled from "styled-components";

const Container = styled.div`
  height: 75px;
  background: #f2f2f5;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  position: relative;
  z-index: 2;
  & .dashboard-header-right {
    display: flex;
    align-items: center;
    & .dashboard-profile-pic {
      height: 50px;
      width: 50px;
      border-radius: 29px;
      margin-right: 13px;
      object-fit: cover;
    }
    & .menu-icon {
      display: flex;
      font-size: 22px;
      margin-left: 50px;
      align-items: center;
      & :hover {
        cursor: pointer;
      }
    }
  }
  & .dashboard-header-left {
    font-weight: bold;
    font-family: initial;
    font-size: 24px;
  }
`;

export { Container };
