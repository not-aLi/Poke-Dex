import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 flex-auto">
      <h1 className="text-6xl 2xl:text-8xl font-bold text-red-600 mb-4 text-center">
        404
      </h1>
      <p className="text-2xl md:text-3xl 2xl:text-5xl text-gray-700 text-center">
        Page Not Found
      </p>
      <p className="text-md md:text-xl 2xl:text-2xl lg:mt-4 text-gray-500 mt-2 text-center">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center mt-8 px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-all"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
