import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookFrom = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form className="book-form" onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      ></input>
      <input type="submit" value="Add"></input>
    </form>
  );
};

export default BookFrom;
