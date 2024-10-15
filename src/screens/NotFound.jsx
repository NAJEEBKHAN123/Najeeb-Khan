import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found!</h1>
      <p className="text-lg mb-8">Sorry, You're route are not found.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
