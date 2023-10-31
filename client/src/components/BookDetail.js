// BookDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch the book with the given ID from your API
    // Update the state with the fetched book
  }, [id]);

  return (
    <div className="container">
      {book ? (
        <>
          <h2 className="book-title">{book.title}</h2>
          <p className="book-info">Author: {book.author}</p>
          <p className="book-info">Publication Year: {book.publication_year}</p>
          <p className="book-info">ISBN: {book.ISBN}</p>
          <img src={book.image} alt={book.title} className="book-image" />
          <button>Delete</button>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
