import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, editBook } from '../services/bookService';

const EditBook = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState({ title: '', author: '', genre: '', year: '', isbn: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation after editing

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const fetchedBook = await getBookById(id);
        setBook(fetchedBook); // Set the fetched book data
      } catch (err) {
        setError('Failed to fetch book.'); // Error handling
        console.error(err); // Log error for debugging
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value }); // Update book state with user input
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await editBook(id, book); // Send updated book data to the server
      navigate('/all-books'); // Redirect after successful edit
    } catch (err) {
      setError('Failed to update book.'); // Error handling
      console.error(err); // Log error for debugging
    }
  };

  if (error) return <div>{error}</div>; // Display error message if any

  return (
    <div>
      <h1>Edit Book</h1>
      {book && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Author"
            required
          />
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            placeholder="Genre"
            required
          />
          <input
            type="text"
            name="year"
            value={book.year}
            onChange={handleChange}
            placeholder="Year"
            required
          />
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            placeholder="ISBN"
            required
          />
          <button type="submit">Update Book</button>
        </form>
      )}
    </div>
  );
};

export default EditBook;
