import React, { useCallback, useEffect, useState } from 'react';
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/reducer";
import MediaPlayer from './mediaPlayer';
import { motion } from 'framer-motion';




const Card = ({ book }) => {
  const {
    poster,
    title,
    summary,
    isRecommended,
    chapters,
  } = book;

  const [{  isAudiobookPlaying}, dispatch] = useStateValue();

  const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);

  const startPlayer = () => {
    if (!isAudiobookPlaying || currentlyPlayingBook !== book) {
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        isAudiobookPlaying: true,
        bookData: book,
      });
      setCurrentlyPlayingBook(book);
    }
  };
  useEffect(() => {
    if (!isAudiobookPlaying) {
      setCurrentlyPlayingBook(null);
    }
  }, [isAudiobookPlaying]);

  
  
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
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {isRecommended ? 'Recommended' : 'Read more'}
          </button>
          <button className=' items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
           onClick={startPlayer}>
            Listen</button>
            {isAudiobookPlaying && currentlyPlayingBook && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed min-w-[100px] h-26 inset-x-10 bottom-0 bg-white drop-shadow-2xl backdrop-blur-md rounded-lg`}
          >
            <MediaPlayer book={currentlyPlayingBook} />
          </motion.div>
        )} {/* Render MediaPlayer only when isAudiobookPlaying is true */}
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
