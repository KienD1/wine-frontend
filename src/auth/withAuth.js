import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
        const navigate = useNavigate();
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        useEffect(() => {
            if (!isLoggedIn) {
                navigate('/login');
            }
        }, [isLoggedIn, navigate]);

        if (!isLoggedIn) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
    return WithAuth;
};

export default withAuth;
