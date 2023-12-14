import { createContext } from 'react';
import useLocalStorage from '../user-storage/useLocalStorage';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [ storedValue, setValue] = useLocalStorage(null);
  
  return (
    <AuthContext.Provider value={{ storedValue, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
