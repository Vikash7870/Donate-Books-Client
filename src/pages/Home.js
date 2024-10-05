// Home.js
import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

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
                <td>{book.yearOfPublication}</td> {/* Use the correct property name */}
                <td>{book.isbn}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No books available.</td> {/* No data message */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
