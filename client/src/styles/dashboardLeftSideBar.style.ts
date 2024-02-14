import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background:#141b1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 6px #0000005a;
  color:white;
  & .dashboard-side-bar-logo-desktop {
    height: 60px;
    width: 60px;
    margin: 30px 0px 0px 0px;
    @media screen and (max-width: 950px) {
      height: 30px;
      width: 30px;
    }
  }
  & .dashboard-side-bar-heading{
    color:white;
    font-weight:bold;
    font-family:initial;
    font-size:22px;
    margin-bottom:60px;
  }

  & .dashboard-side-bar-logo-small-devices {
    height: 60px;
    width: 60px;
    margin: 30px 0px 60px 0px;
    @media screen and (min-width: 950px) {
      display: none;
    }
  }
  & .dashboard-menu-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 950px) {
      width: 20px;
      padding: 0px 2px;
      text-align: center;
    }
  }
`;

export { Container };
