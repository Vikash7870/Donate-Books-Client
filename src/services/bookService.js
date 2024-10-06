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

// Get a book by ID
export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data; // Return the book data
  } catch (error) {
    console.error('Error fetching book:', error);
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

// Delete a book
export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    });
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error; // Re-throw for further handling in your component
  }
};

// Edit a book
export const editBook = async (id, bookData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, bookData, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data; // Return the updated book data
  } catch (error) {
    console.error('Error updating book:', error);
    throw error; // Re-throw for further handling in your component
  }
};
