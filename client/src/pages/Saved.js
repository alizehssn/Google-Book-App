import React from "react";
import { Container } from "../components/Grid";
import BookJumbotron from "../components/Jumbotron";
import SavedBookList from "../components/SavedList";



const SavedBooks = () => {
    
    return(
        <div>
            
            <Container> <SavedBookList/> </Container>
           
        </div>
    )
    
}


export default SavedBooks;