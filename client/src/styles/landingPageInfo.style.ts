import styled from "styled-components";

const LandingPageContainer = styled.div`
  /* your styling goes here */
  & .main {
    /* your styles for the "main" class */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #F6F6F6;
    padding: 35px;

    & .image {
      width: 500px;
      height: 500px;
    }

    & .content {
      display: flex;
      flex-direction: column;
      padding: 35px;
      justify-content: center;

      & .heading {
        font-size: xx-large;
        font-family: sans-serif;
      }
      & .text {
        margin-top: 25px;
        font-size: medium;
        font-family: sans-serif;
      }
      .text-bullets {
        list-style-type: disc; /* You can use 'disc', 'circle', 'square', etc. for different bullet styles */
        margin-bottom: 8px; /* Adjust the margin as needed */
        margin: 20px;
      }
    }
  }
`;

export { LandingPageContainer };
