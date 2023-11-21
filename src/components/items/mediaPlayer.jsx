/* eslint-disable no-undef */
// musicPlayer.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from 'react-h5-audio-player';
import { IoMdClose } from 'react-icons/io';
import { IoArrowRedo, } from 'react-icons/io5';
import { RiPlayListFill } from 'react-icons/ri';
import 'react-h5-audio-player/lib/styles.css';
import { actionType } from '../../Context/reducer';
import PlayerList from '../menus/PlayerList';


const MediaPlayer = ({ book }) => {
  const [isPlayList, setIsPlayList] = useState(false);
  const [currentlyPlayingBook,] = useState(null);

  const { title, author, poster, audioUrl } = book;


  const closeMusicPlayer = () => {
    if (isAudiobookPlaying) {
      dispatch({
        type: actionType.SET_AUDIOBOOK_PLAYING,
        isAudiobookPlaying: false,
      });

    }
  };



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

      <PlayerList book={book} />
    </div>
  );
};

export default MediaPlayer;
