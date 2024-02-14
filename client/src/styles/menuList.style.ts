import styled, { css } from "styled-components";
interface PropsInterFace {
  isActive: boolean;
  title: string;
}

export const Container = styled.div<PropsInterFace>`
  display: flex;
  color: #3b3a39;
  height: 45px;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  opacity: 0.7;
  ${(props) =>
    props.isActive &&
    css`
        font: normal normal medium 18px/22px Rubik;
        letter-spacing: 0px;
        color: #1d1e20;
        opacity: 1;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.4);
        @media screen and (max-width: 950px) {
          background-color: rgba(255, 255, 255, 0.5) !important;;
          padding: 1px 5px 5px 6px !important;;
          width: 30px !important;
          height:30px !important;
          border-radius: 5px !important;
        }
      `}
  & .menu-element {
    margin-left: auto;
    margin-right: auto;
    width: 120px;
    & .dashboard-menu-list-element {
      display: flex;
      text-decoration: none;
      color: white;
      align-items:center;
      & .list-item {
        margin-left: 3px;
        list-style-type: none;
        @media screen and (max-width: 950px) {
          display: none;
          
        }
      }
      & .dashboard-menu-list-icon {
        width: 15px;
        height:15px;
      }
    }
  }
`;
