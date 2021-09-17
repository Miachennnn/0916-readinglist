import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="book-detail-n">{book.title}</div>
      <div className="book-detail-er">{book.author}</div>
    </li>
  );
};

export default BookDetail;
