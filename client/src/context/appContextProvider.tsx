"use client";
import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { jwtDecode } from "jwt-decode";

export interface UserType {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  profileUrl: string;
  phoneNo?: string;
}
type AdditionalInfoType = {
  iat: number;
  exp: number;
};

interface AppContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  login: (newToken: string) => void;
  logout: () => void;
  isAuthenticated:boolean;
  setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>;
}
interface AppContextProviderPropsType {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  logout: () => {},
  login: (newToken) => {},
  isAuthenticated:false,
  setIsAuthenticated:()=>{}
});

const AppContextProvider: React.FC<AppContextProviderPropsType> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve token from local storage on component mount
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      // Decode the token to get user information
      const decodedUser: UserType & AdditionalInfoType = jwtDecode(storedToken);
      const { id, firstName, lastName, role, email,exp,profileUrl,phoneNo } = decodedUser;
      const currentTime:number = Date.now() / 1000; 
      if (!(exp < currentTime)) {
      
        setUser({ id, firstName, lastName, role, email,profileUrl,phoneNo });
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = useCallback((newToken: string) => {
    // Save the token to local storage on login
    localStorage.setItem("token", newToken);
    setToken(newToken);
    // Decode the token to get user information
    const decodedUser: UserType & AdditionalInfoType = jwtDecode(newToken);
    const { id, firstName, lastName, role, email, profileUrl, phoneNo } =
      decodedUser;

    setUser({ id, firstName, lastName, role, email, profileUrl, phoneNo });
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    // Remove the token from local storage on logout
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const memoizedValue = useMemo(
    () => ({ token, setToken, user, setUser, logout, login,setIsAuthenticated,isAuthenticated }),
    [token, setToken, user, setUser, logout, login,setIsAuthenticated,isAuthenticated]
  );

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
