import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem('uc')) {
    <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
