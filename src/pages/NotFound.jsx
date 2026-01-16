import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="container mt-5 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead">
        The page at <code>{location.pathname}</code> does not exist.
      </p>
      <Link to="/" className="btn btn-primary btn-lg mt-3">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;