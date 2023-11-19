/* eslint-disable no-undef */
// musicPlayer.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from 'react-h5-audio-player';
import { IoMdClose } from 'react-icons/io';
import { IoArrowRedo, IoMusicalNote } from 'react-icons/io5';
import { RiPlayListFill } from 'react-icons/ri';
import 'react-h5-audio-player/lib/styles.css';
import { useStateValue } from '../../Context/StateProvider';
import { actionType } from '../../Context/reducer';


const MediaPlayer = ({ book }) => {
  const [isPlayList, setIsPlayList] = useState(false);
  const [{ isAudiobookPlaying, pausedBook, playlist  }, dispatch] = useStateValue();
  const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);

  const { title, author, poster, audioUrl } = book;

  useEffect(() => {
    if (!book || typeof book !== 'object') {
      return;
    }

    if (pausedBook) {
      setCurrentlyPlayingBook(pausedBook);
      dispatch({
        type: actionType.PAUSE_AUDIOBOOK,
        isAudiobookPlaying: false,
      });
    } else {
      setCurrentlyPlayingBook(book);
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        isAudiobookPlaying: true,
        bookData: book,
      });
    }

  }, [book, pausedBook, dispatch]);

  const closeMusicPlayer = () => {
    if (isAudiobookPlaying) {
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        isAudiobookPlaying: false,
      });

    }
  };

  const changeBookPlayer = (newBook) => {
    console.log("The Play list : " + playlist);
    if (!isAudiobookPlaying) {
      
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        isAudiobookPlaying: true,
        
      });
     };

     if (isAudiobookPlaying) {
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        isAudiobookPlaying: true,
      });
     };

     if (book !== newBook) {
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        book: newBook,
      });
    }



  


}

const nextTrack = () => {
  if (book > playlist.length) {
    dispatch({
      type: actionType.SET_AUDIOBOOK,
      book: 0,
    });
  } else {
    dispatch({
      type: actionType.SET_AUDIOBOOK,
      book: book + 1,
    });
  }
};

const previousTrack = () => {
  if (book === 0) {
    dispatch({
      type: actionType.SET_AUDIOBOOK,
      book: 0,
    });
  } else {
    dispatch({
      type: actionType.SET_AUDIOBOOK,
      book: book - 1,
    });
  }
};

useEffect(() => {
  if (book > playlist.length) {
    dispatch({
      type: actionType.SET_AUDIOBOOK,
      book: 0,
    });
  }
}, [book]);

  return (
    <div className="w-full full items-center gap-3 overflow-hidden">
      <div className={`w-full full items-center gap-3 p-4 flex relative`}>
        <img
          src={poster}
          className="w-40 h-20 object-cover rounded-lg"
          alt=""
        />
        <div className="flex items-start flex-col">
          <p className="text-xl text-headingColor font-semibold">
            {title}
            <span className="text-base"></span>
          </p>
          <p className="text-textColor">
            {author}
            <span className="text-sm text-textColor font-semibold"></span>
          </p>
          <motion.i
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsPlayList(!isPlayList)}
          >
            <RiPlayListFill className="text-textColor hover:text-headingColor text-3xl cursor-pointer" />
          </motion.i>
        </div>
        <div className="flex-1 ">
          {currentlyPlayingBook && currentlyPlayingBook === book && (
            <AudioPlayer
              src={audioUrl}
              onPlay={() => console.log("Audio is playing")}

              onClickNext={nextTrack}
              onClickPrevious={previousTrack}
              autoPlay={false}
              showSkipControls={true}
            />
          )}
        </div>
        <div className="h-full flex items-center justify-center flex-col gap-3">
        <motion.i whileTap={{ scale: 0.8 }} onClick={closeMusicPlayer}>
          <IoMdClose className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
        </motion.i>
        <motion.i whileTap={{ scale: 0.8 }} >
          <IoArrowRedo className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
        </motion.i>
      </div>
      </div>

      
      {isPlayList && (
        <div className="absolute left-4 bottom-24 gap-2 py-2 w-350 max-w-[350px] h-510 max-h-[510px] flex flex-col overflow-y-scroll scrollbar-thin rounded-md shadow-md bg-primary">
          {playlist.length > 0 ? (
            playlist.map((audiobook, index) => (
              <motion.div
                key={audiobook.id}
                initial={{ opacity: 0, translateX: -50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group w-full p-4 hover:bg-card flex gap-3 items-center cursor-pointer ${
                  audiobook?.id === currentlyPlayingBook?.id
                    ? "bg-card"
                    : "bg-transparent"
                }`}
                onClick={() => changeBookPlayer(audiobook)}
              >
                <IoMusicalNote className="text-textColor group-hover:text-headingColor text-2xl cursor-pointer" />

                <div className="flex items-start flex-col">
                  <p className="text-lg text-headingColor font-semibold">
                    {`${
                      audiobook?.title.length > 20
                        ? audiobook?.title.slice(0, 20)
                        : audiobook?.title
                    }`}{' '}
                    <span className="text-base">({audiobook?.author})</span>
                  </p>
                  <p className="text-textColor">
                    {audiobook?.author}{' '}
                    <span className="text-sm text-textColor font-semibold">
                      ({audiobook?.rate})
                    </span>
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default MediaPlayer;
