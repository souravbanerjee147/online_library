import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
          <i className="fas fa-book-reader me-2"></i>
          Online Library
        </Link>

        {/* Bootstrap will handle this button automatically */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/')}`}
                to="/"
              >
                <i className="fas fa-home me-1"></i>
                Home
                {isActive('/') && <span className="visually-hidden">(current)</span>}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/browse')}`}
                to="/browse"
              >
                <i className="fas fa-book me-1"></i>
                Browse Books
                {isActive('/browse') && <span className="visually-hidden">(current)</span>}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/add-book')}`}
                to="/add-book"
              >
                <i className="fas fa-plus-circle me-1"></i>
                Add Book
                {isActive('/add-book') && <span className="visually-hidden">(current)</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;