// bookService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books'; // Replace with your backend API URL

// Get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data; // Return the books data
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error; // Re-throw for further handling in your component
  }
};

// Donate a book
export const donateBook = async (bookData) => {
  try {
    const response = await axios.post(`${API_URL}/donate`, bookData, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data; // Return the response from the server
  } catch (error) {
    console.error('Error donating book:', error);
    throw error; // Re-throw for further handling in your component
  }
};
