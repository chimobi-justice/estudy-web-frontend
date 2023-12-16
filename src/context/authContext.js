import { createContext } from 'react';
import useCookieStorage from '../user-storage/useCookies';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [
    getStoredUserCookie, 
    setStoredUserCookie, 
    clearStoredUserCookie 
   ] = useCookieStorage();

  return (
    <AuthContext.Provider
      value={{
        getStoredUserCookie,
        setStoredUserCookie,
        clearStoredUserCookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
