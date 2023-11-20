// BookTypesList.js
import React from 'react';
import BookType from './BookType';
import './booktypestyle.css';
const BookTypesList = ({ onTypeSelect }) => {
  const bookTypes = [
    { type: 'All',
    //  icon: '📚' 
    },
    { type: 'Drama',
    //  icon: '🎭' 
    },
    { type: 'Fiction', 
    // icon: '📖' 
  },
    { type: 'Fantasy', 
    // icon: '📷'
   },
     
  ];

  return (
      <div className="flex gap-40 cursor-pointer justify-center  rounded-full w-full bg-card   p-5 text-white font-bold text-lg mt-10 mb-5">
      {bookTypes.map((bookType) => (
        <BookType
          key={bookType.type}
          type={bookType.type}
          icon={bookType.icon}
          onClick={onTypeSelect}
        />
      ))}
    </div>
  );
};

export default BookTypesList;