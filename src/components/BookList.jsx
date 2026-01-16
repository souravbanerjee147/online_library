import React from 'react';
import BookCard from './BookCard';
import SearchBar from './SearchBar';

const BookList = ({
    books,
    title = "Books",
    showSearch = true,
    onSearch,
    emptyMessage = "No books found.",
    showCategory = false,
    currentCategory = null
}) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredBooks, setFilteredBooks] = React.useState(books);

    // Update filtered books when books or search term changes
    React.useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBooks(filtered);
        }
    }, [searchTerm, books]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (onSearch) {
            onSearch(term);
        }
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        if (onSearch) {
            onSearch('');
        }
    };

    return (
        <div className="book-list-container">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-1">
                        {currentCategory ? `${currentCategory} Books` : title}
                    </h2>
                    {books.length > 0 && (
                        <p className="text-muted mb-0">
                            Showing {filteredBooks.length} of {books.length} books
                            {searchTerm && (
                                <span>
                                    {' '}for "<strong>{searchTerm}</strong>"
                                </span>
                            )}
                        </p>
                    )}
                </div>

                {showCategory && currentCategory && (
                    <span className="badge bg-primary fs-6 px-3 py-2">
                        {currentCategory}
                    </span>
                )}
            </div>

            {/* Search Bar */}
            {showSearch && books.length > 0 && (
                <div className="mb-4">
                    <SearchBar
                        onSearch={handleSearch}
                        onClear={handleClearSearch}
                        placeholder="Search books by title, author, or category..."
                        value={searchTerm}
                    />
                </div>
            )}

            {/* Results Info */}
            {searchTerm && filteredBooks.length > 0 && (
                <div className="alert alert-info d-flex justify-content-between align-items-center">
                    <span>
                        Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} matching "{searchTerm}"
                    </span>
                    <button
                        className="btn btn-sm btn-outline-info"
                        onClick={handleClearSearch}
                    >
                        Clear Search
                    </button>
                </div>
            )}

            {/* Book Grid or Empty State */}
            {filteredBooks.length === 0 ? (
                <div className="text-center py-5 my-5 border rounded-3 bg-light">
                    <i className="fas fa-book fa-3x text-muted mb-3"></i>
                    <h4 className="text-muted mb-2">{emptyMessage}</h4>
                    {searchTerm ? (
                        <div>
                            <p className="text-muted mb-3">No books found for "{searchTerm}"</p>
                            <button
                                className="btn btn-primary"
                                onClick={handleClearSearch}
                            >
                                <i className="fas fa-times me-2"></i>
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        <p className="text-muted">Try adding some books to get started!</p>
                    )}
                </div>
            ) : (
                <>
                    {/* Grid View */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {filteredBooks.map((book) => (
                            <div key={book.id} className="col">
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination/Footer Info */}
                    <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                        <div className="text-muted small">
                            <i className="fas fa-info-circle me-1"></i>
                            Click on any book to view details
                        </div>
                        {filteredBooks.length > 6 && (
                            <div className="text-muted small">
                                Showing {Math.min(filteredBooks.length, 6)} of {filteredBooks.length} books
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default BookList;