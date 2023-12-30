import styled from "styled-components";

const LoginFormContainer = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: black;
  & .errorMessage {
    font-size: 11px;
    color: red;
    margin-top:-8px;
  }
  & .forgot-password {
    font-size: 12px;
    text-decoration: none;
    margin-top: 5px;
    color: #002d5f;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    padding: 2px 0px 2px 2px;
    & :hover {
      cursor: pointer;
    }
  }
  & .create-new-account-link {
    font-size: 12px;
    text-decoration: none;
    margin-top: 5px;
    color: #002d5f;
    text-align: center;
  }
  & .login-label {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 22px;
    font-family: initial;
    text-align: center;
  }
  & .login-logo {
    margin: auto;
  }
  & .login-btn {
    background: #002d5f;
    width: 100%;
    border-radius: 20px;
    margin-top: 20px;
    height: 35px;
    text-transform: capitalize;
  }
`;

export { LoginFormContainer };
