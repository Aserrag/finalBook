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
    <div className="max-w-xs w-1/6   p-2">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img className=" h-fit w-fit object-cover rounded-t-lg" src={poster} alt={title} />
        </a>
        <div className="p-5">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>






          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            
            
          {`${summary.length> 20? summary.slice(0, 150):summary}`}{"...."}</p>





          <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {isRecommended ? 'Recommended Book' : 'Read more'}

          </a>
          {chapters && chapters.length > 0 && (
            <div className="mt-3">

              {/* <ul className="list-disc pl-5">
                {chapters.map((chapter) => (
                  <li key={chapter.chapterId}>
                    <a href={chapter.chapterUrl} target="_blank" rel="noopener noreferrer">{chapter.chapterName}</a>
                  </li>
                ))}
              </ul> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
