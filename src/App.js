import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DonateBook from './pages/DonateBook';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { currentUser } = useAuth(); // Get the current user from Auth context

  return (
    <Router>
      <Navbar /> {/* Render the Navbar for all pages */}
      <Routes>
        {/* Redirect to Home if logged in, otherwise redirect to Login */}
        <Route path="/" element={<Navigate to={currentUser ? "/home" : "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private routes for authenticated users */}
        <Route path="/donate-book" element={<PrivateRoute><DonateBook /></PrivateRoute>} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
