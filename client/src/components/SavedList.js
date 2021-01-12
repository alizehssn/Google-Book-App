
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BookCard from "./Card";

import API from "../utils/API";

class SavedBookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.savedBooks()
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
  };

  makeCards = (books, removeBook) => {
    return books.map((book) => {
      return (
        <BookCard
          key={book._id}
          book={book}
        ></BookCard>
      );
    });
  };

  render() {
    return (
      <Container className="mt-3">
        {this.makeCards(this.state.books)}
      </Container>
    );
  }
}

export default SavedBookList;