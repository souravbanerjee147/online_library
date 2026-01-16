import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const Home = () => {
  const { books, categories } = useSelector((state) => state.books);
  const popularBooks = books.slice(0, 3);

  return (
    <div className="container mt-4">
      {/* hero Section */}
      <div className="hero-section bg-primary text-white p-5 rounded-3 mb-5 shadow">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">Welcome to Online Library</h1>
            <p className="lead mb-4">Discover, read, and share your favorite books with our community. Explore thousands of titles across all genres.</p>
            <Link to="/browse" className="btn btn-light btn-lg px-4">
              Start Exploring
            </Link>
          </div>
          <div className="col-lg-4 text-center d-none d-lg-block">
            <i className="fas fa-book-open display-1 opacity-75"></i>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="section mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-dark">Book Categories</h2>
          <Link to="/browse" className="text-decoration-none text-primary">
            View All →
          </Link>
        </div>
        <div className="row g-3">
          {categories.map((category, index) => (
            <div key={category} className="col-6 col-md-4 col-lg-2">
              <Link
                to={`/browse/${category}`}
                className="category-card d-block text-center p-3 rounded-3 text-decoration-none"
                style={{
                  backgroundColor: getCategoryColor(index),
                  color: 'white',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="fw-bold">{category}</div>
                <small>{books.filter(b => b.category === category).length} books</small>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="section">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-dark">Popular Books</h2>
          <Link to="/browse" className="btn btn-outline-primary">
            See All Books
          </Link>
        </div>

        {popularBooks.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-book fa-3x text-muted mb-3"></i>
            <p className="text-muted">No books available yet. Be the first to add one!</p>
            <Link to="/add-book" className="btn btn-primary">
              Add First Book
            </Link>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {popularBooks.map((book) => (
              <div key={book.id} className="col">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// category colors
const getCategoryColor = (index) => {
  const colors = [
    '#007bff', // Blue
    '#28a745', // Green
    '#dc3545', // Red
    '#ffc107', // Yellow
    '#17a2b8', // Teal
    '#6f42c1', // Purple
  ];
  return colors[index % colors.length];
};

export default Home;