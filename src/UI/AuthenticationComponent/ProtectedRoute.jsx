// components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContxt } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContxt);
  console.log("logged In? :", isLoggedIn)
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/Checkuser" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
