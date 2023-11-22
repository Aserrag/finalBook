import React, { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/reducer";
import MediaPlayer from "./mediaPlayer";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Card = ({ book }) => {
  const { id, poster, title, summary, chapters, author, bookCover } = book;
  const navigate = useNavigate();
  const [{ isAudiobookPlaying }, dispatch] = useStateValue();
  const [isHovered, setIsHovered] = useState(false);
  const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);





  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="max-w-xs w-full  md:w-1/2 lg:w-1/3 xl:w-600  p-4 mx-auto mb-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-card border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img
            className="h-64 w-full object-cover rounded-t-lg"
            src={poster}
            alt={title}
          />
        </a>
        <div className="p-4">
          <a>
            <h5 className="mb-4 text-lg font-bold tracking-tight text-white dark:text-white">
              {title}
            </h5>
          </a>
          {isHovered && (
            <div className="flex justify-start flex-col gap-2">
              {/* <Link  to={{
                pathname:`/bookinfo/${id}`,
                search: `?book=${book}`,
                 }} 
                 params>Read more</Link> */}
              <Button onClick={() => {
                navigate(`/bookpage/${id}`, {
                  state: {
                    poster, title, summary, author, bookCover
                  }
                })
              }}>Read More</Button>
              <span className="mx-2"></span>
              <Button onClick={()=> setCurrentlyPlayingBook(book.id)}>
                Listen
              </Button>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
