import React from 'react';
import Card from './card'; // Assuming Card.js is in the same folder
import { BookDirectory } from '../data/book'; 
 // Assuming books.js is in the data folder

const BookList = () => {
  const bookDirectory = new BookDirectory();
  const { listOfBooks } = bookDirectory;

  return (
    <div className="flex flex-wrap justify-center ">
      {bookDirectory.listOfBooks.map((book, index) => (
        <Card key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
