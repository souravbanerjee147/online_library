import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import BookList from '../components/BookList';

const BrowseBooks = () => {
  const { category } = useParams();
  const { books, categories } = useSelector((state) => state.books);

  // Filter books by category if specified
  const filteredBooks = category
    ? books.filter(book => book.category === category)
    : books;

  return (
    <div className="container mt-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/browse">Browse Books</Link>
          </li>
          {category && (
            <li className="breadcrumb-item active" aria-current="page">
              {category}
            </li>
          )}
        </ol>
      </nav>

      {/* Main Content */}
      <BookList
        books={filteredBooks}
        title={category ? `${category} Books` : "All Books"}
        showSearch={true}
        emptyMessage={category ? `No books found in ${category} category.` : "No books available."}
        showCategory={!!category}
        currentCategory={category}
      />

      {/* Categories Quick Links */}
      {!category && (
        <div className="mt-5 pt-4 border-top">
          <h4 className="mb-3">Browse by Category</h4>
          <div className="d-flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/browse/${cat}`}
                className="btn btn-outline-primary btn-sm px-3 py-2"
              >
                <i className="fas fa-tag me-1"></i>
                {cat}
                <span className="badge bg-primary rounded-pill ms-2">
                  {books.filter(b => b.category === cat).length}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}


      {category && (
        <div className="mt-4 text-center">
          <Link to="/browse" className="btn btn-outline-secondary">
            <i className="fas fa-arrow-left me-2"></i>
            Back to All Categories
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;