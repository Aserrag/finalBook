import React, { useState } from 'react'
import { useStateValue } from '../../Context/StateProvider';
import { motion } from 'framer-motion';
import { actionType } from '../../Context/reducer';
import { IoMusicalNote } from 'react-icons/io5';

const PlayerList = ({ book }) => {
    const [isPlayList, setIsPlayList] = useState(false);
    const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);
    const [{ isAudiobookPlaying, pausedBook, playlist }, dispatch] = useStateValue();
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

    return (
        <div>


            {isPlayList && (
                <div className="absolute left-4 bottom-24 gap-2 py-2 w-350 max-w-[350px] h-510 max-h-[510px] flex flex-col overflow-y-scroll scrollbar-thin rounded-md shadow-md bg-primary">
                    {playlist.length > 0 ? (
                        playlist.map((audiobook, index) => (
                            <motion.div
                                key={audiobook.id}
                                initial={{ opacity: 0, translateX: -50 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`group w-full p-4 hover:bg-card flex gap-3 items-center cursor-pointer ${audiobook?.id === currentlyPlayingBook?.id
                                    ? "bg-card"
                                    : "bg-transparent"
                                    }`}
                                onClick={() => changeBookPlayer(audiobook)}
                            >
                                <IoMusicalNote className="text-textColor group-hover:text-headingColor text-2xl cursor-pointer" />

                                <div className="flex items-start flex-col">
                                    <p className="text-lg text-headingColor font-semibold">
                                        {`${audiobook?.title.length > 20
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
    )
}

export default PlayerList