import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetail = ({ book }) => {
  // const { removeBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "remove", book })}>
      <div className="book-detail-n">{book.title}</div>
      <div className="book-detail-er">{book.author}</div>
    </li>
  );
};

export default BookDetail;
