//musicPlayer.jsx

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";
import { IoMdClose } from "react-icons/io";
import { IoArrowRedo, IoArrowUndo, IoMusicalNote } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { Logo } from '../../assets/img';
import "react-h5-audio-player/lib/styles.css";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/reducer";





const MediaPlayer = ({ book }) => {

  const [isPlayList, setIsPlayList] = useState(false);
  const [{  isAudiobookPlaying}, dispatch] = useStateValue();
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);


  // Destructure book properties
  const { title, author, rate, poster, bookCover , audioUrl } = book;

  const onClickNext = () => {
    dispatch({ type: 'NEXT_AUDIOBOOK' });
  };

  useEffect(() => {
    console.log('Component mounted with book prop:', book);
    return () => {
      console.log('Component unmounted');
    };
  }, [book]);

  useEffect(() => {
    if (!book || typeof book !== 'object') {
      return;
    }

    // Update the currently playing state
    setCurrentlyPlaying(book);

    // Assuming you have a function to dispatch the audiobook playing action
    dispatch({ type: 'SET_AUDIOBOOK_PLAYING', isAudiobookPlaying: true, bookData: book });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book]);

  const closeMusicPlayer = () => {
    if (isAudiobookPlaying) {
      dispatch({
        type: 'SET_AUDIOBOOK_PLAYING',
        isAudiobookPlaying: false,
      });
      setCurrentlyPlaying(null);
    }
  };
  if (!book || typeof book !== 'object') {
    return (
      <div>
        <p>No book data available</p>
        {/* You can customize the message or render a different UI for this case */}
      </div>
    );
  }

  return (
    <div className="w-full flex items-center gap-3 overflow-hidden ">
    <div className={`w-full full items-center gap-3 p-4 flex relative`}>
      <img
        src={book.poster}
        className="w-40 h-20 object-cover rounded-lg"
        alt=""
      />
      <div className="flex items-start flex-col">
        <p className="text-xl text-headingColor font-semibold">
          {/* {`${
            allAudiobooks[audiobook]?.name.length > 20
              ? allAudiobooks[audiobook]?.name.slice(0, 20)
              : allAudiobooks[audiobook]?.name
          }`}{" "} */}{book.title}
          <span className="text-base"></span>
        </p>
        <p className="text-textColor">
          {/* {allAudiobooks[audiobook]?.author}{" "} */}{book.author}
          <span className="text-sm text-textColor font-semibold">
            
          </span>
        </p>
        <motion.i
          whileTap={{ scale: 0.8 }}
           onClick={() => setIsPlayList(!isPlayList)}
        >
          <RiPlayListFill className="text-textColor hover:text-headingColor text-3xl cursor-pointer" />
        </motion.i>
      </div>
      <div className="flex-1 ">
      {currentlyPlaying && currentlyPlaying === book && (
        <AudioPlayer
           src={book.audioUrl}
          onPlay={() => console.log("Audio is playing") }
          onPause={() => dispatch({ isAudiobookPlaying: false }) }
          onClickNext={() => dispatch({ isAudiobookPlaying: false }) }
          autoPlay={false}
          showSkipControls={true}
 
        />
        )}
      </div>
      <div className="h-full flex items-center justify-center flex-col gap-3">
        <motion.i whileTap={{ scale: 0.8 }}  onClick={closeMusicPlayer} >
          <IoMdClose className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
        </motion.i>
        <motion.i whileTap={{ scale: 0.8 }} onClick={onClickNext}>
          <IoArrowRedo className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
        </motion.i>
      </div>
    </div>
    

    {/* {isPlayList && (
      <>
        <PlayListCard />
      </>
    )}

    {miniPlayer && (
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed right-2 bottom-2 "
      >
        <div className="w-40 h-40 rounded-full flex items-center justify-center  relative ">
          <div className="absolute inset-0 rounded-full bg-red-600 blur-xl animate-pulse"></div>
          <img
            onClick={togglePlayer}
            src={allAudiobooks[audiobook]?.imageURL}
            className="z-50 w-32 h-32 rounded-full object-cover cursor-pointer"
            alt=""
          />
        </div>
      </motion.div>
    )} */}

{isPlayList && (
        <>
          <PlayListCard />
        </>
      )}
  </div>
  )
}

export const PlayListCard = () => {
  const [{ allAudiobooks, audiobook, isAudiobookPlaying }, dispatch] = useStateValue();
 
  // useEffect(() => {
  //   if (!allAudiobooks) {
  //     getAllAudiobooks().then((data) => {
  //       dispatch({
  //         type: actionType.SET_ALL_AUDIOBOOKS,
  //         allAudiobooks: data.data,
  //       });
  //     });
  //   }
  // }, []);

  // const setCurrentPlayAudiobook = (audiobookIndex) => {
  //   if (!isAudiobookPlaying) {
  //     dispatch({
  //       type: actionType.SET_AUDIOBOOK_PLAYING,
  //       isAudiobookPlaying: true,
  //     });
  //   }
  //   if (audiobook !== audiobookIndex) {
  //     dispatch({
  //       type: actionType.SET_AUDIOBOOK,
  //       audiobook: audiobookIndex,
  //     });
  //   }
  // };

  return (
    <div className="absolute left-4 bottom-24 gap-2 py-2 w-350 max-w-[350px] h-510 max-h-[510px] flex flex-col overflow-y-scroll scrollbar-thin rounded-md shadow-md bg-primary">
      {allAudiobooks.length > 0 ? (
        allAudiobooks.map((music, index) => (
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            className={`group w-full p-4 hover:bg-card flex gap-3 items-center cursor-pointer ${
              music?._id === audiobook._id ? "bg-card" : "bg-transparent"
            }`}
            // onClick={() => setCurrentPlayAudiobook(index)}
          >
            <IoMusicalNote className="text-textColor group-hover:text-headingColor text-2xl cursor-pointer" />

            <div className="flex items-start flex-col">
              <p className="text-lg text-headingColor font-semibold">
                {`${
                  music?.name.length > 20
                    ? music?.name.slice(0, 20)
                    : music?.name
                }`}{" "}
                <span className="text-base">({music?.series})</span>
              </p>
              <p className="text-textColor">
                {music?.author}{" "}
                <span className="text-sm text-textColor font-semibold">
                  ({music?.genre})
                </span>
              </p>
            </div>
          </motion.div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default MediaPlayer