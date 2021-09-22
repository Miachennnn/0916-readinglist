import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useReducer } from "react";
export const BookContext = React.createContext();

const BookContextProvider = props => {
  function bookReducer(state, action) {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            title: action.detail.title,
            author: action.detail.author,
            id: uuidv4(),
          },
        ];
      case "remove":
        return [...state.filter(books => books.id !== action.book.id)];
      default:
        throw new Error();
    }
  }
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localbooks = localStorage.getItem("books");
    return localbooks ? JSON.parse(localbooks) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
