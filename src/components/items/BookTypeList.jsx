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
<div className='bg-card mt-5 p-5 w-[100%] h-[350px]'>
  <div className='flex justify-center text-white text-5xl font-bold '>Category</div>
  <div className="flex flex-wrap justify-center gap-4 p-4 mx-auto mb-8 mt-4 bg-card">
    {bookTypes.map((bookType) => (
      <div key={bookType.type} className="flex flex-col items-center">
        <BookType
          type={bookType.type}
          icon={bookType.icon}
          onClick={onTypeSelect}
        />
        <h1 style={{ color: "white", marginTop: "10px", fontSize: "1.5rem" }}>{bookType.type}</h1>
      </div>
    ))}
  </div>
</div>

  );
  
};

export default BookTypesList;