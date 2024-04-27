import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
   box-sizing: border-box; /* Add this line */
  height: 76vh;
  margin-top: 25px;
  overflow-y: hidden;
  & .conversation-section{
  background-color:white;
  width: 75%;
  padding:20px;
  & .not-selected-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  & .not-selected-user-avatar{
    width: 300px;
  }}
  & .chat-ui{
    display: flex;
    flex-direction: column;
    height: 100%;
  & .chat-footer{
 display: flex;
 align-items: center;
 padding: 10px;
 width: 100%;
   border-top:1px solid #d9d8d7 ;
   & .message-input{
    width: 100%;
    outline:none;
    padding-right: 10px;
   }

   & .send-btn{
    border: none;
    background-color: transparent;
   }
  
  }
  & .message-section{
  flex:8;
  padding: 40px 10px 10px 10px;

  & .left-msg-item{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 8px;
    & .message-text{
      font-size:13px;
      margin-left:10px;
      background-color: #edeff0;
      padding: 8px;
      border-radius: 5px;
    }
  }
  & .right-msg-item{
  display: flex;
    align-items: center;
    margin-bottom: 8px;
    justify-content: right;
    & .message-text{
      font-size:13px;
      margin-right:10px;
      background-color:#e8f4ff;
      padding: 8px;
      border-radius: 5px;
    }
  }
  }

  & .chat-header{
    display: flex;
    align-items: center;
    & .selected-user-avatar{
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    & .selected-user-name{
      font-weight: bold;
      margin-left: 5px;
    }
  }
  }

  }
  & .conversation-list{
 background-color: white;
 width: 25%;
 margin-right: 12px;
 padding:20px 15px;
 & .conversation-list-item{
  padding: 10px;
  border-bottom:1px solid #d9d8d7 ;
  display: flex;
  align-items: center;
  & .avatar{
  border-radius:50%;
  width: 30px !important;
  height: 30px !important;

  }
  & .conversation-item-right-section{
  margin-left: 10px;
  width: 100%;
  & .user-name-label-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .user-name-label{
    font-size: 14px;
    font-weight: bold;
  }
  & .msg-date{
   font-size: 10px;
   color: grey;
    display: flex; /* Add display: flex; */
  align-items: center; /* Add align-items: center; */
  }
}
  & .first-msg{
   font-size: 12px;
  }
  }
 };
    & .conversation-label {
      font-weight: bold; /* Change font weight unit */
      font-size: 18px;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  & .chat-item-btn{
    background-color: transparent;
    border: none;
    text-align: left;
    width: 100%;
    & :hover{
      background-color: #ededeb;
    }
  }
  
`;

export { Container };
