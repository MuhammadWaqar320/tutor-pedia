import React from "react";
import Image from "next/image";

interface ChatListPropsType {
  awatar: string;
  userName: string;
  email: string;
  date: any;
}

const ChatList: React.FC<ChatListPropsType> = ({
  awatar = "",
  userName = "",
  email = "",
  date,
}) => {
  return (
    <div className="conversation-list-item">
      <div>
        <Image
          src={awatar}
          alt=""
          className="avatar"
          height={1000}
          width={1000}
        />
      </div>
      <div className="conversation-item-right-section">
        <div className="user-name-label-section">
          <h2 className="user-name-label">{userName}</h2>
          <div className="msg-date">{date()}</div>
        </div>
        <p className="first-msg">{email}</p>
      </div>
    </div>
  );
};

export default ChatList;
