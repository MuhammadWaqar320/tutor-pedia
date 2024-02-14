import { AppContext } from "@/context/appContextProvider";
import { useContext } from "react";

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;

}

export default useAppContext;