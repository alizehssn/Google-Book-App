
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SavedCard from "./SavedCard";

import API from "../utils/API";

class SavedBookList extends Component {
  constructor() {
    super();
    this.state = {
      savedBooks: [],
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.savedBooks()
      .then((res) => {
        let savedBooks = res.data;
        this.setState({ savedBooks: savedBooks });
      })
      .catch((err) => console.log(err));
  };

  makeCards = (savedBooks) => {
    return savedBooks.map(book => {
      return (
        <SavedCard
          key={book._id}
          book={book}
        ></SavedCard>
      )
    })
  };

  render() {
    console.log(this.state)
    return (
      <Container>
        {this.makeCards(this.state.savedBooks)}
      </Container>
    );
  }
}

export default SavedBookList;