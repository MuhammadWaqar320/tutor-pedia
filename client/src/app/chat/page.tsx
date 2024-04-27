"use client";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import logo from "../../../public/images/smallLogo.jpeg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import { useFormik } from "formik";
import { UserType, UserRole, updateUser, getAllUser } from "@/api/user";
import { createNewUser } from "@/api/user";
import { toastSuccessMessage, toastErrMessage } from "@/utils/functions";
import {
  adminDashboardMenuItem,
  gqlErrorCodes,
  studentDashboardMenuItem,
  teacherDashboardMenuItem,
  userRole,
} from "@/utils/constant";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { Container } from "@/styles/chat.style";
import DashboardLayout from "@/components/DashboardLayout";
import { TeacherType, getAllTeachers } from "@/api/teacher";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { uploadFileToFBStorageAndGetURL } from "@/api/common";
import useAppContext from "@/hooks/useAppContext";
import { MenuListType } from "@/components/DashboardLeftSideBar";
import ChatList from "@/components/ChatList";
import SimpleBar from "simplebar-react";
import Image from "next/image";
import chatLogo from "../../../public/images/chatlog.png";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { SendMessageApi, getConversationByParticipants } from "@/api/chat";
import useSocketContext from "@/hooks/useSocket";
import RefreshIcon from "@mui/icons-material/Refresh";

const Chat = () => {
  const router = useRouter();
  const { socket, onLineUsers } = useSocketContext();
  console.log("======online:", onLineUsers);
  const { user, isAuthenticated, logout } = useAppContext();
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState<any>({
    name: "",
    awatar: "",
    id: "",
  });
  const [messages, setMessages] = useState<any>([]);
  const [newMsg, setNewMsg] = useState<string>("");

  const getUsers = async () => {
    try {
      const data = await getAllUser();

      setUsers(data);
    } catch (error) {
      toastErrMessage("Something is went wrong");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (m: any) => {
        setMessages([...messages, m]);
      });
    }
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages,isRefresh]);

  const menuList = (): MenuListType[] => {
    if (user?.role === userRole.student) {
      return studentDashboardMenuItem;
    } else if (user?.role === userRole.teacher) {
      return teacherDashboardMenuItem;
    }

    return adminDashboardMenuItem;
  };
  const handleSelectUser = async (userInfo: any) => {
    const participants = {
      senderId: user?.id,
      receiverId: userInfo.id,
    };
    if (user?.id && userInfo?.id) {
      const res = await getConversationByParticipants(participants);
      if (res?.messages) {
        setMessages(res?.messages);
      } else {
        setMessages([]);
      }
    }
    setSelectedUser(userInfo);
  };
  const convertToLocalDateTime = (timestamp: any) => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return date.toLocaleString("default", options);
  };

  const handleSendMessage = async () => {
    const p = {
      senderId: user?.id,
      receiverId: selectedUser.id,
    };

    try {
      const res = await SendMessageApi({ ...p, message: newMsg });

      if (res) {
        if (user?.id && selectedUser.id) {
          const res = await getConversationByParticipants(p);
          if (res?.messages) {
            setMessages(res?.messages);
            setNewMsg("");
          }
        }
      }
    } catch (error) {}
  };

  return (
    <DashboardLayout menuItemList={menuList()}>
      <Container>
        <div className="conversation-list">
          <div className="conversation-label">Conversations</div>
          <SimpleBar style={{ maxHeight: "90%", paddingRight: "5px" }}>
            {users
              .filter((u: any) => u?.id !== user?.id)
              .map((user: any, index: number) => (
                <button
                  className="chat-item-btn"
                  type="button"
                  style={{
                    borderTop: index === 0 ? "1px solid #d9d8d7" : "none",
                  }}
                  onClick={() =>
                    handleSelectUser({
                      id: user.id,
                      name: user.firstName + " " + user.lastName,
                      awatar: user.profileUrl,
                    })
                  }
                >
                  <ChatList
                    key={user.id}
                    userName={`${user.firstName} ${user.lastName}`}
                    awatar={user.profileUrl}
                    email={user.email}
                    date={() => convertToLocalDateTime(user.createdAt)}
                  />
                </button>
              ))}
          </SimpleBar>
        </div>
        <div className="conversation-section">
          {selectedUser?.name && selectedUser?.awatar ? (
            <div className="chat-ui">
              <div className="chat-header">
                <Image
                  src={selectedUser?.awatar}
                  alt=""
                  className="selected-user-avatar"
                  height={28}
                  width={28}
                />
                <h2 className="selected-user-name">{selectedUser?.name}</h2>
              </div>
              <div className="message-section">
                <SimpleBar style={{ maxHeight: "400px" }}>
                  {messages.map((m: any) => (
                    <>
                      {m.senderId === user?.id ? (
                        <div className="right-msg-item">
                          <p className="message-text">{m.message}</p>
                        </div>
                      ) : (
                        <div className="left-msg-item">
                          <Avatar
                            alt="user"
                            src="https://cdn.create.vista.com/api/media/small/252423428/stock-photo-handsome-man-denim-shirt-jeans-sitting-floor-looking-camera"
                            sx={{ width: 30, height: 30 }}
                          />
                          <p className="message-text">{m?.message}</p>
                        </div>
                      )}
                    </>
                  ))}
                </SimpleBar>
              </div>
              <div className="chat-footer">
                <button className="send-btn" style={{marginRight:"10px"}} onClick={()=>setIsRefresh(!isRefresh)}>
                  <RefreshIcon color="success" />
                </button>
                <input
                  type="text"
                  placeholder="type here..."
                  className="message-input"
                  value={newMsg}
                  onChange={(e) => setNewMsg(e.target.value)}
                />
                <button className="send-btn" onClick={handleSendMessage}>
                  <SendIcon color="success" />
                </button>
              </div>
            </div>
          ) : (
            <div className="not-selected-section">
              <Image
                src={chatLogo}
                alt=""
                className="not-selected-user-avatar"
                height={500}
                width={500}
              />
              <p>
                Please select a conversation from the list to continue chatting.
              </p>
            </div>
          )}
        </div>
      </Container>
    </DashboardLayout>
  );
};

export default Chat;
