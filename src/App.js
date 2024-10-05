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
  const { currentUser } = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={currentUser ? "/home" : "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate-book" element={<PrivateRoute component={DonateBook} />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
      </Routes>
    </Router>
  );
};

export default App;
