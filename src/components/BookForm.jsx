import React from 'react';

const BookForm = ({
    formData,
    errors,
    categories,
    onSubmit,
    onChange,
    submitLabel = "Add Book",
    cancelLabel = "Cancel",
    onCancel
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    <i className="fas fa-book me-2"></i>
                    Title *
                </label>
                <input
                    type="text"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    id="title"
                    name="title"
                    placeholder="Enter book title"
                    value={formData.title}
                    onChange={(e) => onChange('title', e.target.value)}
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                <div className="form-text">Enter the complete title of the book</div>
            </div>

            <div className="mb-3">
                <label htmlFor="author" className="form-label">
                    <i className="fas fa-user-pen me-2"></i>
                    Author *
                </label>
                <input
                    type="text"
                    className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                    id="author"
                    name="author"
                    placeholder="Enter author name"
                    value={formData.author}
                    onChange={(e) => onChange('author', e.target.value)}
                />
                {errors.author && <div className="invalid-feedback">{errors.author}</div>}
                <div className="form-text">Full name of the author</div>
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    <i className="fas fa-tag me-2"></i>
                    Category
                </label>
                <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={(e) => onChange('category', e.target.value)}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <div className="form-text">Select the most appropriate category</div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    <i className="fas fa-align-left me-2"></i>
                    Description *
                </label>
                <textarea
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Enter book description"
                    value={formData.description}
                    onChange={(e) => onChange('description', e.target.value)}
                />
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                <div className="form-text">Brief summary of the book's content</div>
            </div>

            <div className="mb-4">
                <label htmlFor="rating" className="form-label">
                    <i className="fas fa-star me-2"></i>
                    Rating (0-5) *
                </label>
                <div className="d-flex align-items-center">
                    <input
                        type="range"
                        className={`form-range ${errors.rating ? 'is-invalid' : ''}`}
                        id="rating"
                        name="rating"
                        min="0"
                        max="5"
                        step="0.1"
                        value={formData.rating}
                        onChange={(e) => onChange('rating', e.target.value)}
                        style={{ flex: 1, marginRight: '1rem' }}
                    />
                    <span className="badge bg-warning text-dark fs-6">
                        {formData.rating || 0}/5
                    </span>
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <small className="text-muted">0</small>
                    <small className="text-muted">5</small>
                </div>
                {errors.rating && <div className="invalid-feedback d-block">{errors.rating}</div>}
            </div>

            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary flex-grow-1">
                    <i className="fas fa-plus-circle me-2"></i>
                    {submitLabel}
                </button>
                {onCancel && (
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onCancel}
                    >
                        <i className="fas fa-times me-2"></i>
                        {cancelLabel}
                    </button>
                )}
            </div>
        </form>
    );
};

export default BookForm;