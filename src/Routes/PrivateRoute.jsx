import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = sessionStorage.getItem('token');
  const isAuthenticated = token !== null;
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          // Correct way to use navigate
          // Use an empty JSX element as a wrapper, or use parentheses
          <>
            {navigate('/login')}
          </>
        )
      }
    />
  );
};

export default PrivateRoute;
