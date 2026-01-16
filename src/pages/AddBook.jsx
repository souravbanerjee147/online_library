import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.books);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: categories[0] || '',
    description: '',
    rating: '4.0',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(addBook(formData));
      navigate('/browse');
    }
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Clear error
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">
                <i className="fas fa-book-medical me-2"></i>
                Add New Book to Library
              </h2>
            </div>
            <div className="card-body">
              <p className="text-muted mb-4">
                Fill in the details below to add a new book to our library collection.
                All fields marked with * are required.
              </p>

              <BookForm
                formData={formData}
                errors={errors}
                categories={categories}
                onSubmit={handleSubmit}
                onChange={handleChange}
                submitLabel="Add to Library"
                cancelLabel="Cancel"
                onCancel={() => navigate('/browse')}
              />

              <div className="mt-4 pt-3 border-top">
                <h5 className="text-muted">
                  <i className="fas fa-lightbulb me-2"></i>
                  Tips for adding books:
                </h5>
                <ul className="list-unstyled text-muted small">
                  <li><i className="fas fa-check-circle text-success me-2"></i>Provide accurate title and author names</li>
                  <li><i className="fas fa-check-circle text-success me-2"></i>Choose the most relevant category</li>
                  <li><i className="fas fa-check-circle text-success me-2"></i>Write a concise but informative description</li>
                  <li><i className="fas fa-check-circle text-success me-2"></i>Be honest with your rating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;