import React, {Component} from "react";
import { Container } from "../components/Grid";
import BookJumbotron from "../components/Jumbotron";
import BookCardList from "../components/List";


class SavedBooks extends Component {
    constructor(){
        super()
        this.state = {}
    } 
    render(){
    return(
        <div>
            <BookJumbotron title= {this.title}/>
            <Container> <BookCardList/> </Container>
           
        </div>
    )
    }
}


export default SavedBooks;