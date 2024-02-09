import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/users";

export const UserProfileContext = createContext(null);

const UserProfileContextProvider = ({ children }) => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return (
    <UserProfileContext.Provider value={{ user, isLoading }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileContextProvider;
