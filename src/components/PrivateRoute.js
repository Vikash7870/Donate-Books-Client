import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component }) => {
    const { user } = useAuth();

    return user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
