import React, { useState, useEffect } from "react";

import "./BookList.css";

const BookList = props => {
  const { bookList } = props;
  const [list, setList] = useState(bookList);

  useEffect(() => {
    setList(bookList);
  }, [bookList]);

  console.log(list);

  return (
    <>
      {list.map((book, i) => (
        <div key={i} className="book-container">
          <img className="cover-image" src={book.imageUrl} />
          <div className="book-description">
            {book.title} by {book.authorName}
          </div>
        </div>
      ))}
    </>
  );
};

export default BookList;
