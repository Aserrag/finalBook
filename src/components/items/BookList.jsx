import React from 'react';
import Card from './card';
import { BookDirectory } from '../data/book';

const BookList = ({ selectedType, searchTerm }) => {
  const bookDirectory = new BookDirectory();
  const { listOfBooks } = bookDirectory;

  // Filter books based on the selected type and search term
  const filteredBooks = listOfBooks.filter((book) => {
    const matchesType = selectedType === 'All' || book.tags.includes(selectedType);
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-wrap justify-center lg:justify-start ">
      {filteredBooks.map((book, index) => (
        <Card key={index} book={book} className="m-2 lg:m-4 " />
      ))}
    </div>
  );
};

export default BookList;
