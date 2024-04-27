"use client";
import React, { createContext, useEffect, useState } from "react";
import useAppContext from "@/hooks/useAppContext";
import io from "socket.io-client";

const SocketContext = createContext<any>({});

const SocketContextProvider: React.FC<any> = ({ children }) => {
  const { user } = useAppContext();
  const [socket, setSocket] = useState<any>(null);
  const [onLineUsers, setOnlineUsers] = useState<any>([]);

  useEffect(() => {
    console.log("============", user);
    if (user?.id) {
        const socketObj = io("http://localhost:5000", {
          query: {
            userId: user?.id,
          },
        });
      setSocket(socketObj);

      socketObj.on("getOnlineUsers", (users: any) => setOnlineUsers(users));

      return () => (socket ? socket.close() : null);
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user?.id]);

  return (
    <SocketContext.Provider value={{ socket, onLineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketContextProvider };
