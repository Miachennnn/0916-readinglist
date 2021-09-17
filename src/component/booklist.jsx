import { useContext } from "react/cjs/react.development";
import { BookContext } from "../context/BookContext";
import BookDetail from "./bookdetail";
import BookFrom from "./bookform";

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="book-list">
      <ul>
        {books.length
          ? books.map(item => <BookDetail book={item} key={item.id} />)
          : "No books to read. :)"}
      </ul>
      <BookFrom />
    </div>
  );
};

export default BookList;
