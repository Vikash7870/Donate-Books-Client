// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'; // Importing AuthContext
import "../style/Login.css"; // CSS file for styles

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Using the login function from AuthContext

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
                email,
                password
            });

            // Save the token in context
            login(response.data.token); // Call the login function from context
            navigate('/home'); // Redirect to home page after successful login
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message); // Show error message from server
            } else {
                setErrorMessage('Something went wrong. Please try again.'); // Generic error message
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <a href="/register">Register here</a>
            </p>
        </div>
    );
};

export default Login;
