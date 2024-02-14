import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 13rem 1fr;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  @media screen and (max-width: 950px) {
    grid-template-columns: 80px 1fr;
  }
  background: #f2f2f5;
  padding: 0px;
`;
const Content = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 125px);
  padding: 25px;
  text-align: justify;
`;

export { Container, Content };
