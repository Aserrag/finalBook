// BookTypesList.js
import React from 'react';
import BookType from './BookType';
import './booktypestyle.css';
const BookTypesList = ({ onTypeSelect }) => {
  const bookTypes = [
    { type: 'All', icon: '📚' },
    { type: 'Drama', icon: '🎭' },
    { type: 'Fiction', icon: '📖' },
    { type: 'Fantasy', icon: '📷' },
     
  ];

  return (
      <div className="book-types-list sticky top-0 bg-Hcolor z-10">
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