// BookTypesList.js
import React from 'react';
import BookType from './BookType';
import './booktypestyle.css';
import { drama,fantasy,all,fiction } from '../../assets/img';
const BookTypesList = ({ onTypeSelect }) => {
  const bookTypes = [
    { type: 'All',
     icon: all
    },
    { type: 'Drama',
     icon: drama
    },
    { type: 'Fiction', 
    icon: fiction
  },
    { type: 'Fantasy', 
    icon: fantasy
   },
     
  ];

  return (
    <div className='bg-card mt-5 p-5 w-[100%] '>
        <div className='flex justify-center text-white text-5xl font-bold '>Category</div>
      <div className="flex flex-row gap-4  md:w-1/2 lg:w-1/3 xl:w-600  p-4 mx-auto mb-8 mt-4 bg-card justify-center ">
      {bookTypes.map((bookType) => (
        <BookType
          key={bookType.type}
          type={bookType.type}
          icon={bookType.icon}
          onClick={onTypeSelect}
        />
      ))}
    </div>
    </div>
  );
};

export default BookTypesList;