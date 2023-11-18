import React, { useEffect } from 'react'
import { TERipple } from 'tw-elements-react';
import { Card,CardHeader,CardBody,Typography,Button,} from "@material-tailwind/react";
import { useLocation, useParams } from 'react-router-dom';

const BookInfo = ({ book }) => {
  // const { poster, title, summary, isRecommended, chapters ,bookCover,author} = book;


  const params = useLocation();
    console.log(params);
    const {bookid}= useParams();
 

  return (
    <Card className="w-[100%-100px]  h-screen p-5 m-5 rounded-lg flex-row">
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 w-2/5 shrink-0 rounded-r-none"
    >
      <img
       src={params.state.bookCover}
        alt="card-image"
        className="h-full w-full object-cover rounded-md"
      />
    </CardHeader>
    <CardBody className=' m-10'>
    
      <Typography variant="h4" color="blue-gray" className="mb-2">
      {params.state.title}
      </Typography>
      <Typography variant="h6" color="gray" className="mb-4 uppercase">
      {params.state.author}
      </Typography>
      <Typography color="gray" className="mb-8 font-normal">
        {params.state.summary}
      </Typography>
      <a href="#" className="inline-block">
        <Button variant="text" className="flex items-center gap-2">
          back to Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </a>
    </CardBody>
  </Card>
  )
}

export default BookInfo ;