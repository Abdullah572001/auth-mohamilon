import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner text-error text-2xl text-center"></span>
  }

  if (user) {
   return children 
  }

  return (
    <Navigate to="/logIn"></Navigate>
  );
};

export default PrivateRoutes;
