import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthToken } from "./axios_helper";

const withAuth = (WrappedComponent) => {
    const AuthRoute = (props) => {
        if (!getAuthToken() || getAuthToken() === null || getAuthToken() === "null") {
            return <Navigate to="/" />;
        }

        return <WrappedComponent {...props} />;
    };

    return AuthRoute;
};

export default withAuth;