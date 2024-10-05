import React, { useState } from 'react';
import { donateBook } from '../services/bookService';
import { useNavigate } from 'react-router-dom';

const DonateBook = () => {
  const [sNo, setSNo] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [yearOfPublication, setYearOfPublication] = useState('');
  const [isbn, setIsbn] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await donateBook({ sNo, title, author, genre, yearOfPublication, isbn });
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Donate a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sNo" className="form-label">S.No</label>
          <input type="text" className="form-control" id="sNo" value={sNo} onChange={(e) => setSNo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input type="text" className="form-control" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="yearOfPublication" className="form-label">Year of Publication</label>
          <input type="text" className="form-control" id="yearOfPublication" value={yearOfPublication} onChange={(e) => setYearOfPublication(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN</label>
          <input type="text" className="form-control" id="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Donate Book</button>
      </form>
    </div>
  );
};

export default DonateBook;
