import React, { useEffect, useState } from 'react';
import ContainerResponsive from './card';

const BookList = ({ selectedType, searchTerm }) => {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://movieproject0001.pythonanywhere.com/api/v1/books/');
        const data = await response.json();
        setListOfBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Filter books based on the selected type and search term
  const filteredBooks = listOfBooks.filter((book) => {
    const matchesType = selectedType === 'All' || book.cats === parseInt(selectedType); // Assuming cats is the type field
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-wrap justify-center lg:justify-start">
      {filteredBooks.map((book, index) => (
        <ContainerResponsive key={index} book={book} className="m-2 lg:m-4" />
      ))}
    </div>
  );
};

export default BookList;
