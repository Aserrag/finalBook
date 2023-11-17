import React, { useState } from 'react';
import Card from './card'; // Assuming Card.js is in the same folder
import { BookDirectory } from '../data/book';
 // Assuming books.js is in the data folder

const BookList = ({ selectedType , isGridView }) => {
  const bookDirectory = new BookDirectory();
  const { listOfBooks } = bookDirectory;

    // Filter books based on the selected type
    const filteredBooks = selectedType !== 'All'
    ? listOfBooks.filter((book) => book.tags.includes(selectedType))
    : listOfBooks;

  


  return (
    <div className='flex flex-wrap justify-center lg:justify-start'>
      {/* Book cards */}
      {filteredBooks.map((book, index) => (
        <Card key={index} book={book} className='m-2 lg:m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-full' />
      ))}
    </div>
  );
};

export default BookList;