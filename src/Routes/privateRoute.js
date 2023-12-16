import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ children }) => {
  const { getStoredUserCookie } = useContext(AuthContext);

  if (!getStoredUserCookie) {
    <Navigate to="/login" />;
  } else {
    return children;
  }

};

export default PrivateRoute;
