// AddBookForm.js

import React, { useState } from 'react';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publication_year: '',
    ISBN: '',
    image: '',
  });

  const handleChange = (e) => {
    // Handle form input changes and update the formData state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your API to add a new book
  };

  return (
    <div className="container">
      <h2 className="form-title">Add a New Book</h2> {/* Added class name */}
      <form onSubmit={handleSubmit}>
        <button type="submit" className="form-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
