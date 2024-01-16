import { Routes, Route } from 'react-router-dom';

import { BaseComponent } from '../constants/baseComponent';

import ErrorBoundary from '../ErrorBoundary';

// import PrivateRoute from './privateRoute';

import NotFound from '../Components/NotFound';
import UserProfileContextProvider from '../context/userContext';

const Pages = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {BaseComponent.map(({ Component, path, useAuth }) =>
          useAuth ? (
            <>
              <Route
                path={path}
                element={
                  // <PrivateRoute>
                  // </PrivateRoute>
                    <UserProfileContextProvider>
                      <Component />
                    </UserProfileContextProvider>
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
    </ErrorBoundary>
  );
};

export default Pages;
