// components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/account/signin" />;
};

export default PrivateRoute;
