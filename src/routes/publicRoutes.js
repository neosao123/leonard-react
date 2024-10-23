// components/PublicRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

const PublicRoute = ({ children }) => {
    const location = useLocation();
    return isAuthenticated() ? <Navigate to="/" /> : children;
};

export default PublicRoute;
