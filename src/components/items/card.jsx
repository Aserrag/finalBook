import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useStateValue } from '../../Context/StateProvider';
import { useState } from 'react';



  export default function ContainerResponsive({book}) {

    const { id, poster, title, summary, author, bookCover, cats } = book;
// Now you can use the `cats` field in your component

    const navigate = useNavigate();
    const [{ isAudiobookPlaying }, dispatch] = useStateValue();
    const [isHovered, setIsHovered] = useState(false);
    const [currentlyPlayingBook, setCurrentlyPlayingBook] = useState(null);




    const handleCardClick = () => {

        navigate(`/books/${id}`, {
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
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={book.cover}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {book.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
            {book.author}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
         {book.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={handleCardClick}
          >
            Listen
          </Button>
        </CardFooter>
      </Card>
    );
  }
