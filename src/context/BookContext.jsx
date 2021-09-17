import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
export const BookContext = React.createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Where the Crawdads Sing", author: "Delia Owens", id: 1 },
    { title: "The Silent Patient", author: "Alex Michaelides", id: 2 },
    {
      title: "Treasure Island: An Audible Original Drama",
      author: "Robert Louis Stevenson",
      id: 3,
    },
  ]);
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  const addBook = (title, author) => {
    setBooks(books.concat({ title: title, author: author, id: uuidv4() }));
  };
  return (
    <BookContext.Provider value={{ books, removeBook, addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
