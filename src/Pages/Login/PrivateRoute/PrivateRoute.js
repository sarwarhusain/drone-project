import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  // if(isLoading){
  //     return <svg className="mt-5 animate-spin h-5 w-5 mr-3" animation ="border" variant="danger" />
  // }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;