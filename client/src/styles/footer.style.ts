import styled,{css} from "styled-components";

const listCss = css` margin-top:20px;
      color:silver;
      font-size:14px;`;

const FooterContainer = styled.footer`
  background-color: #010e1e;
  padding: 40px 100px 40px 100px;
  color:white;
  .footer-row-1{
   .website-info-section{
    padding:30px;
    & .footer-img-section{
      display:flex;
      align-items:center;
   & h4{
        font-size:28px;
        font-family:initial;
        margin-left:5px;
      }
    }
 
    .website-info{
      color:silver;
      text-align:justify;
      margin-top:10px;
     
    }
   }
   .quick-links{
    font-size:18px;
    .quick-links-list{
     ${listCss}
    }
   }
   .contact-us{
       font-size:18px;
    .contact-us-list{
        ${listCss}
    }
   }
   .follow-us{
       font-size:18px;
    .follow-us-list{
       ${listCss}
       .social-links-box{
        display:flex;
        align-items:center;
        span{
          margin-left:5px;
        }
       }
    }
   }
  }
  .footer-row-2{
    padding-top:10px;
    p{
      text-align:center;
    }
  }
`;


export { FooterContainer };
