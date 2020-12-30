import React from "react";
import BookCard from "./Card";

const BookCardList = (props) => {
  return (
    <div>
      <BookCard
        books={props.books}
        handleSaveBook={props.handleSaveBook}
        as={props.as}
        type={props.type}
        value={props.value}
        variant={props.variant}
        className={props.classes}
        size={props.size}
      />
    </div>
  );
};

export default BookCardList;