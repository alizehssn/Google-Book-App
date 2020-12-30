import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const BookJumbotron = (props) => {
    return(
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>{props.title}</h1>
                </Container>
            </Jumbotron>
        </div>
    )
};

export default BookJumbotron; 