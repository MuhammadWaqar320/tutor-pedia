import styled from "styled-components";

const SignUpContainer = styled.div`
  padding: 30px;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0.2)
    ),
    url(images/bgImage.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  & .sign-up-content-container {
    & .sign-up-form-side {
      display: flex;
      justify-content: center;
      & .sign-up-label {
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        margin-bottom: 0px;
      }
      & .sign-up-form-class {
        background: white;
        width: 550px;
        padding: 25px 30px 30px 30px;
        border-radius: 10px;
        border-top: 8px solid var(--header-bg-color);
        border-bottom: 8px solid var(--header-bg-color);
        box-shadow: 0 0 70px rgba(255, 255, 255, 0.9);
        & .errorMessage{
           font-size:11px;
           color:red;
        }
      }
    }
  }
`;

export { SignUpContainer };
