import React, { Component } from "react";
import { Container } from "../components/Grid";
import { Row } from "../components/Grid"
import { Col } from "../components/Grid"
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import BookCard from "../components/Card"

class Search extends Component {

    state = {
        search: "",
        results: [],
        title: "",
        description: "",
        image: {},
        link: ""
        };

    // on page load, 
    componentDidMount() {
        console.log("Mounted");
        this.searchBooks("");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({results:res.data.items})).then(console.log(this.state.results))
            .catch(err => console.log(err));
    }

    // on Save click,
    handleSaveClick = event => {
    // Log book ID (which is the event)
        const bookInfo = event;
        console.log("This is book info", bookInfo);
        let title = bookInfo.title;
        let description = bookInfo.description;
        let image = bookInfo.image;
        let link = bookInfo.link;
        this.setState({title: title, description: description, image: image, link: link})
    // We want to save this book to the database
      API.saveBook({title: this.state.title, 
    description: this.state.description,
    image: this.state.image,
    link: this.state.link})
        .then(res => console.log("Inside API",res))
        .catch(err => console.log(err));
        alert("Book Saved!")
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    }

    render() {
        return (
            <div className="container-fluid">
                <Jumbotron />
                <Row>
                <SearchForm 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                </Row>
                <Row >
                    {this.state.results.map(book => ( 
                        <BookCard
                            id={book.id} 
                            key={book.id} 
                            title={book.volumeInfo.title} 
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description} 
                            image={book.volumeInfo.imageLinks.thumbnail} 
                            link={book.volumeInfo.infoLink} 
                            handleSaveClick={this.handleSaveClick}
                        />
                    ))}
                </Row>
            </div>
        )
    }
}

export default Search;