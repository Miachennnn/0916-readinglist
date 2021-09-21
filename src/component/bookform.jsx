import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookFrom = () => {
  // dispatch({type:'xx',num:...})
  const { books, dispatch } = useContext(BookContext);

  const [detail, setDetail] = useState({ title: "", author: "" });
  const handleSubmit = e => {
    e.preventDefault();
    // addBook(detail.title, detail.author);
    dispatch({ type: "add", detail });
    setDetail({ title: "", author: "" });
  };

  return (
    <form className="book-form" onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Title"
        value={detail.title}
        onChange={e => setDetail({ ...detail, title: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="Author"
        value={detail.author}
        onChange={e => setDetail({ ...detail, author: e.target.value })}
      ></input>
      <input type="submit" value="Add"></input>
    </form>
  );
};

export default BookFrom;
