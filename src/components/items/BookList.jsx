import React from 'react';
import Card from './card'; // Assuming Card.js is in the same folder
import { BookDirectory } from '../data/book';
 // Assuming books.js is in the data folder

const BookList = () => {
  const bookDirectory = new BookDirectory();
  const { listOfBooks } = bookDirectory;

  return (
    <div className="flex flex-wrap justify-center lg:justify-start">
      {bookDirectory.listOfBooks.map((book, index) => (
        <Card key={index} book={book} className="m-2 lg:m-4"  />
      ))}
    </div>
  );
};

export default BookList;
