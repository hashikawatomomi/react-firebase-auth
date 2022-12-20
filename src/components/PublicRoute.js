import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from './AuthContext'

const PublicRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
};

export default PublicRoute;