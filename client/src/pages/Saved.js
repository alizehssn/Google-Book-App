import React, {Component} from "react";
import { Container } from "../components/Grid";
import BookJumbotron from "../components/Jumbotron";
import SavedBookList from "../components/SavedList";


class SavedBooks extends Component {
    constructor(){
        super()
        this.state = {}
    } 
    render(){
    return(
        <div>
            <BookJumbotron title= {this.title}/>
            <Container> <SavedBookList/> </Container>
           
        </div>
    )
    }
}


export default SavedBooks;