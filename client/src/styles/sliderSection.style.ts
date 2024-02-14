import styled from "styled-components";


export  const SliderContainer=styled.div`


`;
const SliderSectionContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 20%,
      rgba(255, 255, 255, 0.2)
    ),
    url(images/bgImage.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  & .feature {
    color: white;
    max-width: 500px;
    position: absolute;
    top: 40%;
    left: 5%;
    text-align: center;
    padding: auto;
    & .slider-heading {
      color: #f3ce73;
      font-size: 36px;
      font-family: initial;
      margin-bottom: 20px;
    }
    & .slider-info {
      margin-bottom: 20px;
    }
    & .register-btn {
      width: 120px;
      text-transform: capitalize;
      background-color: #f3ce73;
      color: black;
      border-radius: 50px;
      border: 1px solid white;
      font-family: initial;
      font-weight: bold;
      margin-right: 8px;
      &:hover {
        background-color: #002d5f;
        color: white;
      }
    }
    & .about-us-btn {
      width: 120px;
      text-transform: capitalize;
      background-color: black;
      color: white;
      border-radius: 50px;
      border: 1px solid white;
      font-family: initial;
      font-weight: bold;
      &:hover {
        background-color:#002D5F;
        color: white;
      }
    }
  }
  & .lottie {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 80%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export { SliderSectionContainer };
