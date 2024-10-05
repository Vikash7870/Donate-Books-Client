import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend API URL

export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};
