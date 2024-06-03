import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
function Pagination({ previousButton, nextButton, loading }) {
  return (
    <div className="flex justify-center content-center mt-10 mb-10">
      {previousButton && !loading ? (
        <button
          onClick={previousButton}
          className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-all"
        >
          <FaLongArrowAltLeft className="flex justify-center content-center mr-1" />{" "}
          Previous
        </button>
      ) : null}
      {nextButton && !loading ? (
        <button
          onClick={nextButton}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-all"
        >
          Next{" "}
          <FaLongArrowAltRight className="flex justify-center content-center ml-1" />
        </button>
      ) : null}
    </div>
  );
}

export default Pagination;
