import React, { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/reducer";
import MediaPlayer from "./mediaPlayer";
import { motion } from "framer-motion";

const Card = ({ book }) => {
  const {id, poster, title, summary, isRecommended, chapters } = book;

  const [{ isAudiobookPlaying }, dispatch] = useStateValue();
  const [isHovered, setIsHovered] = useState(false);
  const [clickedBooks, setClickedBooks] = useState([]); // Array to store clicked books
  const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);


  const startPlayer = () => {
    if (!isAudiobookPlaying && currentlyPlayingBook !== book) {
      // Add the clicked book to the array
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        isAudiobookPlaying: true,
        bookData: book,
      });
      dispatch({
        type: actionType.ADD_TO_PLAYLIST,
        book: book,
      });
      setCurrentlyPlayingBook(book);
    }



    
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mx-auto mb-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-card border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img
            className="h-64 w-full object-cover rounded-t-lg"
            src={poster}
            alt={title}
          />
        </a>
        <div className="p-4">
          <a>
            <h5 className="mb-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          {isHovered && (
            <div>
              <button className="...">Read more</button>
              <span className="mx-2"></span>
              <button className="..." onClick={startPlayer}>
                Listen
              </button>
            </div>
          )}
          {isAudiobookPlaying && currentlyPlayingBook && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={`fixed min-w-[100px] h-26 inset-x-10 bottom-0 bg-white drop-shadow-2xl backdrop-blur-md rounded-lg`}
            >
              <MediaPlayer book={currentlyPlayingBook} />
            </motion.div>
          )}
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
