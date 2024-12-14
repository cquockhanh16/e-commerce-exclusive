import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span>/</span>
          <span className="text-gray-900">404 Error</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-medium mb-6">404 Not Found</h1>
        <p className="text-gray-600 mb-8">Your visited page not found. You may go home page.</p>
        <a 
          href="/"
          className="inline-block px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          Back to home page
        </a>
      </div>
    </div>
  );
};

export default NotFound;