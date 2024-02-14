import styled,{css} from "styled-components";

const listCss = css` margin-top:20px;
      color:silver;
      font-size:14px;`;

const FooterContainer = styled.footer`
  background-color: #141b1f;
  padding: 60px 100px 30px 100px;
  color: white;
  .footer-row-1 {
    .website-info-section {
      padding: 30px;
      & .footer-img-section {
        display: flex;
        align-items: center;
        & h4 {
          font-size: 28px;
          font-family: initial;
          margin-left: 5px;
        }
      }

      .website-info {
        color: silver;
        text-align: justify;
        margin-top: 10px;
      }
    }
    .quick-links {
      font-size: 18px;
       border-left:1px solid #2e2d2d;
      .quick-links-list {
        ${listCss};
        .footer-list{
          display:flex;
          align-items:center;
          margin-bottom:5px;
        }
       
      }
    }
    .contact-us {
      font-size: 18px;
      border-left:1px solid #2e2d2d;
      display:column;
      .contact-us-list {
        ${listCss};
          .footer-list{
          display:flex;
          align-items:center;
          margin-bottom:5px;
        }
      }
    }
    .follow-us {
      font-size: 18px;
      border-left:1px solid #2e2d2d;
      .follow-us-list {
        ${listCss}
        .social-links-box {
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
  .footer-row-2 {
    padding-top: 20px;
    p {
      text-align: center;
    }
  }
`;


export { FooterContainer };
