import React from 'react';

const ErrorPage = () => {
  const handleBackClick = () => {
    window.history.back();
    // navigate(-1);
  };

  return (
    <div className= 'aria-container'>
      <div className= 'aria-content'>
        <h1 className= 'error-title'>404</h1>
        <h2 className= 'error-subtitle'>Oops! Page Not Found</h2>
        <p className= 'error-description'>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button type="button" className= 'back-button' onClick={handleBackClick}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
