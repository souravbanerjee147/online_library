import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const getRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="rating-stars mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star text-warning"></i>
        ))}
        {halfStar && <i className="fas fa-star-half-alt text-warning"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star text-warning"></i>
        ))}
        <span className="ms-2 fw-bold">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Fiction': '#007bff',
      'Non-Fiction': '#28a745',
      'Sci-Fi': '#dc3545',
      'Mystery': '#6f42c1',
      'Biography': '#17a2b8',
      'Fantasy': '#fd7e14',
    };
    return colors[category] || '#6c757d';
  };

  return (
    <div className="book-card h-100">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-header border-0" style={{
          backgroundColor: getCategoryColor(book.category),
          color: 'white',
          padding: '1rem'
        }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-white text-dark">{book.category}</span>
            <i className="fas fa-book-open"></i>
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-dark mb-2">{book.title}</h5>
          <h6 className="card-subtitle mb-3 text-muted">
            <i className="fas fa-user-pen me-2"></i>
            {book.author}
          </h6>

          {getRatingStars(book.rating)}

          <p className="card-text text-secondary flex-grow-1">
            {book.description.length > 120
              ? `${book.description.substring(0, 120)}...`
              : book.description}
          </p>

          <div className="mt-auto">
            <Link to={`/book/${book.id}`} className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
              <i className="fas fa-eye me-2"></i>
              View Details
            </Link>
          </div>
        </div>
        <div className="card-footer border-0 bg-transparent">
          <small className="text-muted">
            <i className="far fa-clock me-1"></i>
            Added recently
          </small>
        </div>
      </div>
    </div>
  );
};

export default BookCard;