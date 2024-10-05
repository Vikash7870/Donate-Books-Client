import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books'; // Replace with your backend API URL

export const getBooks = async () => {
  return await axios.get(API_URL, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
};

export const donateBook = async (bookData) => {
  return await axios.post(API_URL + '/donate', bookData, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
};
