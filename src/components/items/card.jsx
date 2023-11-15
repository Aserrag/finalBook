import React from 'react';

const Card = ({ book }) => {
  const {
    poster,
    title,
    summary,
    isRecommended,
    chapters,
  } = book;

  
  return (
    <div className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mx-auto mb-8">
      <div className="bg-card border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img className="h-64 w-full object-cover rounded-t-lg" src={poster} alt={title} />
        </a>
        <div className="p-4">
          <a>
            <h5 className="mb-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">
            {`${summary.length > 20 ? summary.slice(0, 200) : summary}`}{"...."}
          </p>
          <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {isRecommended ? 'Recommended' : 'Read more'}
          </a>
          {chapters && chapters.length > 0 && (
            <div className="mt-4">
              {/* Add the chapters section if needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
  
  
};

export default Card;
