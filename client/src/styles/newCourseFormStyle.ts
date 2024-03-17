import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;

  .sign-up-form-class {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adjust the values as needed */
  }

  & .secondary {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 80%;
    align-items: "center";

    & .form-field {
      padding: 10px;
    }
    & .form-field-one {
      /* display: flex; */
      padding: 10px;
      /* justify-content: space-between; */
    }

    & .choose-file {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

export { Container };
