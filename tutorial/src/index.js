import React from 'react';
import { createRoot } from 'react-dom/client';

import { books } from './books';
import Book from './Book';

import './index.css';

const BookList = () => {
  const renderedBooks = books.map((book) => {
    return <Book key={book.id} {...book} />;
  });

  return <section className='booklist'>{renderedBooks}</section>;
};

const root = createRoot(document.querySelector('#root'));
root.render(<BookList />);
