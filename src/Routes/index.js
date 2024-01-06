import { Routes, Route } from 'react-router-dom';

import { BaseComponent } from '../constants/baseComponent';
import PrivateRoute from './privateRoute';

import NotFound from '../Components/NotFound';
import UserProfileContextProvider from '../context/userContext';

const Pages = () => {
  return (
    <Routes>
      {BaseComponent.map(({ Component, path, useAuth }) =>
        useAuth ? (
          <>
            <Route
              path={path}
              element={
                <PrivateRoute>
                  <UserProfileContextProvider>
                    <Component />
                  </UserProfileContextProvider>
                </PrivateRoute>
              }
            />
          </>
        ) : (
          <>
            <Route path={path} element={<Component />} />
            <Route path="*" element={<NotFound />} />
          </>
        )
      )}
    </Routes>
  );
};

export default Pages;
