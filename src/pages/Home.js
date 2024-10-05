import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.data);
    };
    
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h2>All Donated Books</h2>
      
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
        {books.map((book, index) => (
          <tr key={book._id}>
            <th scope="row">{index + 1}</th>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.year}</td>
            <td>{book.isbn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Home;
