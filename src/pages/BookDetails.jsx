import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.books);

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          Book not found!
        </div>
        <Link to="/browse" className="btn btn-primary">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{book.title}</h1>
          <h4 className="card-subtitle mb-3 text-muted">by {book.author}</h4>

          <div className="mb-3">
            <span className="badge bg-info me-2">{book.category}</span>
            <span className="badge bg-warning">Rating: {book.rating} ⭐</span>
          </div>

          <div className="mb-4">
            <h5>Description</h5>
            <p className="card-text">{book.description}</p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary me-2"
          >
            Go Back
          </button>
          <Link to="/browse" className="btn btn-primary">
            Back to Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;