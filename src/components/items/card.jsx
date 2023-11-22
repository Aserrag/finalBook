  import React, { useEffect, useState } from "react";
  import { useStateValue } from "../../Context/StateProvider";
  import { actionType } from "../../Context/reducer";
  import MediaPlayer from "./mediaPlayer";
  import { motion } from "framer-motion";
  import { Link, useNavigate } from "react-router-dom";
  import { Button } from "@material-tailwind/react";
  import AspectRatio from '@mui/joy/AspectRatio';
  import Avatar from '@mui/joy/Avatar';
  import Box from '@mui/joy/Box';
  import Card from '@mui/joy/Card';
  import IconButton from '@mui/joy/IconButton';
  import Typography from '@mui/joy/Typography';
  import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';





  export default function ContainerResponsive({book}) {

    const { id, poster, title, summary, chapters, author, bookCover } = book;
    const navigate = useNavigate();
    const [{ isAudiobookPlaying }, dispatch] = useStateValue();
    const [isHovered, setIsHovered] = useState(false);
    const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);




    const handleCardClick = () => {
      // Navigate to another page with state when the card is clicked
      navigate(`/bookpage/${id}`, {
        state: {
          poster,
          title,
          summary,
          author,
          bookCover,
        },
      });
    };


    return (
      <Box sx={{ minHeight: 350  }}>
        <Card
          variant="outlined"
          sx={(theme) => ({
            width: 300,
            gridColumn: 'span 2',
            flexDirection: 'row',
            flexWrap: 'wrap',
            resize: 'horizontal',
            overflow: 'hidden',
            margin: '16px', 
            padding: '16px',
            cursor: 'pointer',
            gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
            transition: 'transform 0.3s, border 0.3s',
            '&:hover': {
              borderColor: theme.vars.palette.primary.outlinedHoverBorder,
              transform: 'translateY(-2px)',
            },
            '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },

          })}
          onClick={handleCardClick}
        >
          <AspectRatio
            variant="soft"
            sx={{
              flexGrow: 1,
              display: 'contents',
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
            }}
          >
            <img
              src={poster}
              loading="lazy"
              alt={title}
            />
          </AspectRatio>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 200,
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <div>
                <Typography level="title-lg">
                  <Link
                    href="#container-responsive"
                    overlay
                    underline="none"
                    sx={{
                      color: 'text.primary',
                      '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                    }}
                  >
                    {title}
                  </Link>
                </Typography>
                
              </div>
              <IconButton
                size="sm"
                variant="plain"
                color="neutral"
                sx={{ ml: 'auto', alignSelf: 'flex-start' }}
              >
                <FavoriteBorderRoundedIcon color="danger" />
              </IconButton>
            </Box>

            <AspectRatio

              variant="soft"
              sx={{
                '--AspectRatio-paddingBottom':
                  'clamp(0px, (100% - 200px) * 999, 200px)',
                pointerEvents: 'none',
              }}
            >
              <img
                alt=""
                src={poster}
              />
            </AspectRatio>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>

              <div>
                <Typography level="body-xs">Written by</Typography>
                <Typography level="body-sm">{author}</Typography>
              </div>
            </Box>
          </Box>
        </Card>
      </Box>
    );
  }



  // const Card = ({ book }) => {
  //   const { id, poster, title, summary, chapters, author, bookCover } = book;
  //   const navigate = useNavigate();
  //   const [{ isAudiobookPlaying }, dispatch] = useStateValue();
  //   const [isHovered, setIsHovered] = useState(false);
  //   const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);





  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };

  //   return (
  //     <div
  //       className="max-w-xs w-full  md:w-1/2 lg:w-1/3 xl:w-600  p-4 mx-auto mb-8"
  //       onMouseEnter={handleMouseEnter}
  //       onMouseLeave={handleMouseLeave}
  //     >
  //       <div className="bg-card border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700">
  //         <a>
  //           <img
  //             className="h-64 w-full object-cover rounded-t-lg"
  //             src={poster}
  //             alt={title}
  //           />
  //         </a>
  //         <div className="p-4">
  //           <a>
  //             <h5 className="mb-4 text-lg font-bold tracking-tight text-white dark:text-white">
  //               {title}
  //             </h5>
  //           </a>
  //           {isHovered && (
  //             <div className="flex justify-start flex-col gap-2">
  //               {/* <Link  to={{
  //                 pathname:`/bookinfo/${id}`,
  //                 search: `?book=${book}`,
  //                  }} 
  //                  params>Read more</Link> */}
  //               <Button onClick={() => {
  //                 navigate(`/bookpage/${id}`, {
  //                   state: {
  //                     poster, title, summary, author, bookCover
  //                   }
  //                 })
  //               }}>Read More</Button>
  //               <span className="mx-2"></span>
  //               <Button onClick={()=> setCurrentlyPlayingBook(book.id)}>
  //                 Listen
  //               </Button>
  //             </div>
  //           )}
  //           {isAudiobookPlaying && currentlyPlayingBook && (
  //             <motion.div
  //               initial={{ opacity: 0, y: 50 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               exit={{ opacity: 0, y: 50 }}
  //               className={`fixed min-w-[100px] h-26 inset-x-10 bottom-0 bg-white drop-shadow-2xl backdrop-blur-md rounded-lg`}
  //             >
  //               <MediaPlayer book={currentlyPlayingBook} />
  //             </motion.div>
  //           )}
  //           {chapters && chapters.length > 0 && (
  //             <div className="mt-4">
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Card;
