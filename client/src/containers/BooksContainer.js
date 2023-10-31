import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BooksContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    fetch('http://127.0.0.1:8000/api/books/')
      .then((res) => res.json())
      .then((books) => {
        // Create an array of promises to fetch authors for all books
        const authorPromises = books.map((book) => {
          return fetch(`http://127.0.0.1:8000/api/authors/${book.author}`).then(
            (res) => res.json()
          );
        });

        // Use Promise.all to wait for all author fetches to complete
        Promise.all(authorPromises)
          .then((authors) => {
            // Update each book's author property
            books.forEach((book, index) => {
              book.author = authors[index];
            });
            setBooks(books);
          })
          .catch((error) => {
            console.error('Error fetching authors:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="page-title">Spooky Books Catalog</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`} className="book-link">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksContainer;
