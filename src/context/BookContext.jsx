import { v4 as uuidv4 } from "uuid";
import React, { useReducer, useState } from "react";
export const BookContext = React.createContext();

//useReducer => dispatch(action) Reducer(action,type)
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
  const [books, dispatch] = useReducer(bookReducer, []);
  // const [state,dispatch] = useReducer(Reducer,InitialState)
  // const [books, setBooks] = useState([
  //   { title: "Where the Crawdads Sing", author: "Delia Owens", id: 1 },
  //   { title: "The Silent Patient", author: "Alex Michaelides", id: 2 },
  //   {
  //     title: "Treasure Island: An Audible Original Drama",
  //     author: "Robert Louis Stevenson",
  //     id: 3,
  //   },
  // ]);
  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };
  // const addBook = (title, author) => {
  //   setBooks(books.concat({ title: title, author: author, id: uuidv4() });
  // };
  return (
    // <BookContext.Provider value={{ books, removeBook, addBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
