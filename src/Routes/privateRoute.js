// import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ children }) => {
  // const { storedValue } = useContext(AuthContext);

  if (localStorage.getItem('kpq') === null) {
    <Navigate to="/login" />;
  } else {
    return children;
  }

};

export default PrivateRoute;
