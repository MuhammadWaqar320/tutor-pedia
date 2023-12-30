import styled from "styled-components";

const HeaderContainer = styled.div`
& .header-menu-item{
  color:white;
  text-decoration:none;
  &:hover{
   color:silver;
  }
}
  & .header-logo {
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      
    }
  }
  & .login-btn {
    border-radius: 20px;
    border: 1px solid white;
    color: white;
  }
  & .sign-up-btn {
    border-radius: 20px;
    color: black;
    background: white;
    margin-left: 8px;
  }
`;
const appBarStyle = {
  background: "#002D5F",
  padding: "2px 0px",
 
};
const LogoContainer = { display: { xs: "none", md: "flex" }, mr: 1 };

const appNameStyle = {
  mr: 2,
  fontFamily: "initial",
  fontWeight: 700,
  letterSpacing: ".2rem",
  color: "inherit",
  textDecoration: "none",
};

export { HeaderContainer, appBarStyle, LogoContainer, appNameStyle };
