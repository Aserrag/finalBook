import React from 'react'
import { motion } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";
import { IoMdClose } from "react-icons/io";
import { IoArrowRedo, IoArrowUndo, IoMusicalNote } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { Logo } from '../../assets/img';

const MediaPlayer = () => {
  return (
    <div className="w-full full flex items-center gap-3 overflow-hidden ">
    <div
      className={`w-full full items-center gap-3 p-4 `}
    >
      <img
        src={Logo}
        className="w-20 h-20 object-cover rounded-md"
        alt=""
      />
      <div className="flex items-start flex-col">
        <p className="text-xl text-headingColor font-semibold">
          {/* {`${
            allAudiobooks[audiobook]?.name.length > 20
              ? allAudiobooks[audiobook]?.name.slice(0, 20)
              : allAudiobooks[audiobook]?.name
          }`}{" "} */}SONGGGGG
          <span className="text-base">ONGGGGGGGG</span>
        </p>
        <p className="text-textColor">
          {/* {allAudiobooks[audiobook]?.author}{" "} */}hhhh
          <span className="text-sm text-textColor font-semibold">
            {/* ({allAudiobooks[audiobook]?.genre}) */}sasas
          </span>
        </p>
        <motion.i
          whileTap={{ scale: 0.8 }}
          // onClick={() => setIsPlayList(!isPlayList)}
        >
          <RiPlayListFill className="text-textColor hover:text-headingColor text-3xl cursor-pointer" />
        </motion.i>
      </div>
      <div className="flex-1">
        <AudioPlayer
          // src={allAudiobooks[audiobook]?.audiobookUrl}
          onPlay={() => console.log("is playing")}
          autoPlay={true}
          showSkipControls={true}
          
        />
      </div>
      <div className="h-full flex items-center justify-center flex-col gap-3">
        <motion.i whileTap={{ scale: 0.8 }} >
          <IoMdClose className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
        </motion.i>
        <motion.i whileTap={{ scale: 0.8 }}>
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
  </div>
  )
}

export default MediaPlayer