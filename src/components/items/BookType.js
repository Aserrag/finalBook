// BookType.js
import React from 'react';

const BookType = ({ type, icon, onClick }) => {
  return (
    <div className="book-type  " onClick={() => onClick(type)}>
      <div className="icon">{icon}</div>
      <div className="label">{type}</div>
    </div>
  );
};

export default BookType;
