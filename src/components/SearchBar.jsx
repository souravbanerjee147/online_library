import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({
    onSearch,
    placeholder = "Search...",
    delay = 300,
    onClear,
    value = '',
    className = ''
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);


    useEffect(() => {
        setInputValue(value);
    }, [value]);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (onSearch) {
                onSearch(inputValue);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [inputValue, delay, onSearch]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClear = () => {
        setInputValue('');
        if (onClear) {
            onClear();
        }
        if (onSearch) {
            onSearch('');
        }
        inputRef.current?.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            handleClear();
        }
    };

    return (
        <div className={`search-bar-container ${className}`}>
            <div className={`input-group input-group-lg shadow-sm ${isFocused ? 'focused' : ''}`}>
                <span className="input-group-text bg-white border-end-0">
                    <i className={`fas fa-search ${inputValue ? 'text-primary' : 'text-muted'}`}></i>
                </span>

                <input
                    ref={inputRef}
                    type="text"
                    className="form-control border-start-0 py-3"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    aria-label="Search books"
                />

                {inputValue && (
                    <button
                        className="input-group-text bg-white border-start-0"
                        onClick={handleClear}
                        type="button"
                        aria-label="Clear search"
                    >
                        <i className="fas fa-times text-muted"></i>
                    </button>
                )}

                <button
                    className="btn btn-primary px-4"
                    type="button"
                    onClick={() => onSearch && onSearch(inputValue)}
                >
                    Search
                </button>
            </div>

            {/* Search tips */}
            {isFocused && !inputValue && (
                <div className="search-tips card mt-2 shadow-sm border-0">
                    <div className="card-body py-2">
                        <small className="text-muted d-flex align-items-center">
                            <i className="fas fa-lightbulb me-2"></i>
                            <span>Try searching by title, author, or category</span>
                        </small>
                    </div>
                </div>
            )}

            {/* Recent searches and suggestions */}
            {inputValue.length > 0 && inputValue.length < 3 && (
                <div className="search-hint mt-2">
                    <small className="text-muted">
                        <i className="fas fa-info-circle me-1"></i>
                        Type at least 3 characters for better results
                    </small>
                </div>
            )}
        </div>
    );
};

export default SearchBar;