import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response); // Ensure the data is set correctly
      } catch (err) {
        setError('Failed to fetch books. Please try again later.'); // Error handling
        console.error(err); // Log error for debugging
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id);
        setBooks(books.filter((book) => book._id !== id)); // Update state to remove the deleted book
        alert('Book deleted successfully!');
      } catch (err) {
        setError('Failed to delete book. Please try again.'); // Error handling
        console.error(err); // Log error for debugging
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-book/${id}`); // Navigate to the edit page for the selected book
  };

  return (
    <div className="container">
      <h2>All Donated Books</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error if exists */}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Year of Publication</th>
            <th scope="col">ISBN</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book._id}>
                <th scope="row">{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.yearOfPublication}</td>
                <td>{book.isbn}</td>
                <td>
                  <button onClick={() => handleEdit(book._id)}>Edit</button>
                  <button onClick={() => handleDelete(book._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No books available.</td> {/* No data message */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
