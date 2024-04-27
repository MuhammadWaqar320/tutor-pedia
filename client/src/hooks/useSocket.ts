import { SocketContext } from "@/context/socketContext";
import { useContext } from "react";

const useSocketContext = () => {
    const context = useContext(SocketContext);
    if (!context) {
    throw new Error("Socketcontext must be used within an AppContextProvider");
  }
  return context;  

}

export default useSocketContext;