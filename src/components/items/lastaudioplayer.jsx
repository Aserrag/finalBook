import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { IoArrowRedo } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
import AudioPlayer from 'react-h5-audio-player';
import { useStateValue } from "../../Context/StateProvider";
import { RiPlayListFill } from "react-icons/ri";

export const MediaPlayer = ({ title, author, coverImage, audioSource }) =>




{
  

  const [isPlayList, setIsPlayList] = React.useState(false);
  const [currentlyPlayingBook,] = useStateValue(null);



    return (
      <div className="w-full mt-16 items-center gap-3 overflow-hidden">
        <div className={`w-full full items-center gap-3 p-4 flex relative `}>
          <img
            src={coverImage}
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
            {currentlyPlayingBook && currentlyPlayingBook  && (
              <AudioPlayer
                src={audioSource}
                // onClickNext={}
                // onClickPrevious={previousTrack}
                autoPlay={false}
                showSkipControls={true}
              />
            )}
          </div>
          <div className="h-full flex items-center justify-center flex-col gap-3">
            {/* <motion.i whileTap={{ scale: 0.8 }} onClick={closeMusicPlayer}>
              <IoMdClose className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
            </motion.i> */}
            <motion.i whileTap={{ scale: 0.8 }} >
              <IoArrowRedo className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
            </motion.i>
          </div>
        </div>
  
        
      </div>
    );
}
