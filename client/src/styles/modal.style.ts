import styled from "styled-components";

const ModalContentContainer = styled.span`
  & .close-icon {
    display: flex;
    justify-content: right;
    margin-bottom: 3px;
    & :hover {
      cursor: pointer;
    }
  }
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
  backgroundImage: `url(images/modal_bg.jpeg)`,
  color: "white",
  paddingTop: "5px;",
};

export { style, ModalContentContainer };
